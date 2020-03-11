package vn.com.fis.eim_client.security;

import java.io.IOException;
import java.security.PublicKey;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

@Service
public class PublicKeyLoader
{
	@Value("${jwt.eim.publickey}")
	private String publicKeyFile;

	public PublicKey pk = null;

	public PublicKey getPublicKey()
	{
		if (pk == null)
		{
			try
			{
				CertificateFactory f = CertificateFactory.getInstance("X.509");
				X509Certificate certificate = (X509Certificate) f.generateCertificate(new ClassPathResource(publicKeyFile).getInputStream());
				pk = certificate.getPublicKey();
			} catch (CertificateException | IOException e)
			{
				e.printStackTrace();
			}
		}

		return pk;
	}
}
