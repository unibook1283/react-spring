package bask.bask;

import bask.bask.domain.Member;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

@SpringBootApplication
public class BaskApplication {

	public static void main(String[] args) {
//		EntityManagerFactory emf = Persistence.createEntityManagerFactory("bask");
//		EntityManager em = emf.createEntityManager();
//		EntityTransaction tx = em.getTransaction();
//
//		try {
//			tx.begin();
//			logic(em);
//			tx.commit();
//		} catch (Exception e) {
//			tx.rollback();
//		} finally {
//			em.close();
//		}
//		emf.close();
		SpringApplication.run(BaskApplication.class, args);
	}

	private static void logic(EntityManager em) {
		Member member = new Member();

		member.setName("savd");

		em.persist(member);
	}
}
