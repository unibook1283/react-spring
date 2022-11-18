package bask.bask;

import bask.bask.domain.Member;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

@SpringBootApplication
@EnableJpaAuditing
public class BaskApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaskApplication.class, args);
	}
}
