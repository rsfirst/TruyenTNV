package vn.com.fis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({ "vn.com.fis" })
@EnableCaching
public class TruyenTNVApplication
{

	public static void main(String[] args)
	{
		SpringApplication.run(TruyenTNVApplication.class, args);
	}
}
