package bask.bask.repository;

import bask.bask.domain.Court;
import org.springframework.stereotype.Repository;
import org.thymeleaf.templateresolver.FileTemplateResolver;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class CourtRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Court court) {
        if (court.getId() == null) {
            em.persist(court);
        } else {
            em.merge(court);
        }
    }

    public Court findOne(Long id) {
        return em.find(Court.class, id);
    }

    public List<Court> findAll() {
        return em.createQuery("select c from Court c", Court.class)
                .getResultList();
    }

    public List<Court> findByName(String name) {
        return em.createQuery("select c from Court c where c.name = :name", Court.class)
                .setParameter("name", name)
                .getResultList();
    }

    public void delete(Court court) {
        em.remove(em.contains(court) ? court : em.merge(court));
    }
}
