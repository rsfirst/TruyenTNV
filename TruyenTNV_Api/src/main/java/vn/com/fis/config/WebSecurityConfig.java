package vn.com.fis.config;

import java.io.File;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.util.Arrays;

import javax.net.ssl.KeyManager;
import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;

import org.apache.cxf.configuration.jsse.TLSClientParameters;
import org.apache.cxf.endpoint.Client;
import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;
import org.apache.cxf.transport.http.HTTPConduit;
import org.apache.cxf.transports.http.configuration.HTTPClientPolicy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.MethodInvokingFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.ftu.mnp.web.service.CommitmentWebSv;
import com.telcordia.inpac.ws.NPCWebServicePortType;

import vn.com.fis.eim_client.security.JwtAuthenticationTokenFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${mnp.soap.client.keystore-file}")
	private String KEYSTORE_FILE = "";

	@Value("${mnp.soap.client.keystore-pass}")
	private String KEYSTORE_PASS = "";

	@Value("${mnp.soap.client.address}")
	private String SOAP_CLIENT_ADDRESS = "";

	@Value("${mnp.soap.client.violation.address}")
	private String SOAP_VIOLATION_CLIENT_ADDRESS = "";

	@Value("${path.config.server}")
	private String path = null;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public JwtAuthenticationTokenFilter authenticationTokenFilterBean() throws Exception {
		return new JwtAuthenticationTokenFilter();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
				// we don't need CSRF because our token is invulnerable
				// .csrf().disable()
				.cors().and().csrf().disable()

				// don't create session
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

				.authorizeRequests()
				// .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				// allow anonymous resource requests
				.antMatchers(HttpMethod.GET, "/", "/*.html", "/favicon.ico", "/**/*.html", "/**/*.css", "/**/*.js")
				.permitAll().antMatchers(HttpMethod.POST, "/**/login").permitAll().antMatchers("/auth/**").permitAll()
				.anyRequest().authenticated();

		// Custom JWT based security filter
		httpSecurity.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);

		// disable page caching
		httpSecurity.headers().cacheControl();

	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Bean
	public NPCWebServicePortType createMNPClient() throws Exception {
		JaxWsProxyFactoryBean jaxWsProxyFactory = new JaxWsProxyFactoryBean();

		jaxWsProxyFactory.setServiceClass(NPCWebServicePortType.class);
		jaxWsProxyFactory.setAddress(SOAP_CLIENT_ADDRESS);
		NPCWebServicePortType npc = (NPCWebServicePortType) jaxWsProxyFactory.create();
		configureSSLOnTheClient(npc, KEYSTORE_FILE, KEYSTORE_PASS);
		return npc;
	}

	@Bean
	public CommitmentWebSv createCommitment() throws Exception {
		JaxWsProxyFactoryBean jaxWsProxyFactory = new JaxWsProxyFactoryBean();

		jaxWsProxyFactory.setServiceClass(CommitmentWebSv.class);
		jaxWsProxyFactory.setAddress(SOAP_VIOLATION_CLIENT_ADDRESS);
		CommitmentWebSv npc = (CommitmentWebSv) jaxWsProxyFactory.create();
		configureSSLOnTheClient(npc, KEYSTORE_FILE, KEYSTORE_PASS);
		return npc;
	}

	private void configureSSLOnTheClient(Object c, String keyStorePath, String keyStorePassword) {
		Client client = ClientProxy.getClient(c);
		HTTPConduit httpConduit = (HTTPConduit) client.getConduit();
		File truststore = new File(keyStorePath);
		try {
			TLSClientParameters tlsParams = new TLSClientParameters();
			tlsParams.setDisableCNCheck(true);
			KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
			keyStore.load(new FileInputStream(truststore), keyStorePassword.toCharArray());
			TrustManagerFactory trustFactory = TrustManagerFactory
					.getInstance(TrustManagerFactory.getDefaultAlgorithm());
			trustFactory.init(keyStore);
			TrustManager[] tm = trustFactory.getTrustManagers();
			tlsParams.setTrustManagers(tm);
			keyStore.load(new FileInputStream(truststore), keyStorePassword.toCharArray());
			KeyManagerFactory keyFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
			keyFactory.init(keyStore, keyStorePassword.toCharArray());
			KeyManager[] km = keyFactory.getKeyManagers();
			tlsParams.setKeyManagers(km);
			httpConduit.setTlsClientParameters(tlsParams);

			HTTPClientPolicy policy = new HTTPClientPolicy();
			policy.setConnectionTimeout(1000000);
			policy.setReceiveTimeout(1000000);
			policy.setAllowChunking(false);
			httpConduit.setClient(policy);
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}

	@Bean
	public MethodInvokingFactoryBean methodInvokingFactoryBean() {
		MethodInvokingFactoryBean methodInvokingFactoryBean = new MethodInvokingFactoryBean();
		methodInvokingFactoryBean.setTargetClass(SecurityContextHolder.class);
		methodInvokingFactoryBean.setTargetMethod("setStrategyName");
		methodInvokingFactoryBean.setArguments(new String[] { SecurityContextHolder.MODE_INHERITABLETHREADLOCAL });
		return methodInvokingFactoryBean;
	}
}
