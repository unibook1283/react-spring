package bask.bask.repository;

import bask.bask.domain.Court;
import bask.bask.domain.Favorite;
import bask.bask.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class FavoriteRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Favorite favorite) {
        em.persist(favorite);
    }

    public Favorite findOne(Long id) {
        Favorite favorite = em.find(Favorite.class, id);
        return favorite;
    }

    public List<Favorite> findALl() {
        return em.createQuery("select f from Favorite f", Favorite.class)
                .getResultList();
    }

    public List<Favorite> findFavoritesByMember(Member member) {
        return em.createQuery("select f from Favorite f where f.member = :member", Favorite.class)
                .setParameter("member", member)
                .getResultList();
    }

    public List<Favorite> findFavoritesByCourt(Court court) {
        return em.createQuery("select f from Favorite f where f.court = :court", Favorite.class)
                .setParameter("court", court)
                .getResultList();
    }

    public void delete(Favorite favorite) {
        em.remove(em.contains(favorite) ? favorite : em.merge(favorite));
    }
}
