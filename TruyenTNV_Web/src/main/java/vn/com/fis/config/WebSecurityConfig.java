package vn.com.fis.config;

import java.util.Arrays;

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

import vn.com.fis.security.JwtAuthenticationTokenFilter;
import vn.com.fis.ws.WebService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{
	@Bean
	public PasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}

	@Bean
	public JwtAuthenticationTokenFilter authenticationTokenFilterBean() throws Exception
	{
		return new JwtAuthenticationTokenFilter();
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception
	{
		httpSecurity
				// we don't need CSRF because our token is invulnerable
				// .csrf().disable()
				.cors().and().csrf().disable()
				// don't create session
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
				// .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				// allow anonymous resource requests
				.antMatchers(HttpMethod.GET, "/**/login", "/", "/*.html", "/favicon.ico", "/**/*.html", "/**/*.css", "/**/*.js", "/images/**","/css/**", "/assets/**",
						"/views/**", "/popup/**")
				.permitAll().antMatchers(HttpMethod.POST, "/", "/**/login", "/account/auth").permitAll().antMatchers("/auth/**").permitAll().anyRequest()
				.authenticated().and().exceptionHandling().accessDeniedPage("/access_Denied");

		// Custom JWT based security filter
		httpSecurity.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource()
	{
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("*"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Bean
	public MethodInvokingFactoryBean methodInvokingFactoryBean()
	{
		MethodInvokingFactoryBean methodInvokingFactoryBean = new MethodInvokingFactoryBean();
		methodInvokingFactoryBean.setTargetClass(SecurityContextHolder.class);
		methodInvokingFactoryBean.setTargetMethod("setStrategyName");
		methodInvokingFactoryBean.setArguments(new String[] { SecurityContextHolder.MODE_INHERITABLETHREADLOCAL });
		return methodInvokingFactoryBean;
	}

	@Bean
	public WebService webSerice()
	{
		return new WebService();
	}
}
