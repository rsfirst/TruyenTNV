package vn.com.tnv.app;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;

import vn.com.tnv.entity.Skill;
import vn.com.tnv.entity.User;
import vn.com.tnv.repository.UserRepository;

@SpringBootApplication
@ComponentScan({ "vn.com.tnv" })
@EnableCaching
public class TruyenTNVWebApplication {
	public static void main(String[] args) {
		SpringApplication.run(TruyenTNVWebApplication.class, args);
	}
}
