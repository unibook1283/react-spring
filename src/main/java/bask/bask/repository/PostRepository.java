package bask.bask.repository;

import bask.bask.domain.Court;
import bask.bask.domain.Member;
import bask.bask.domain.Post;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class PostRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Post post) {
        em.persist(post);
    }

    public Post findOne(Long id) {
        Post post = em.find(Post.class, id);
        return post;
    }

    public List<Post> findAll() {
        return em.createQuery("select p from Post p", Post.class)
                .getResultList();
    }

    public List<Post> findPostsByMember(Member member) {
        return em.createQuery("select p from Post p where p.member = :member", Post.class)
                .setParameter("member", member)
                .getResultList();
    }

    public List<Post> findPostsByCourt(Court court) {
        return em.createQuery("select p from Post p where p.court = :court", Post.class)
                .setParameter("court", court)
                .getResultList();
    }

    public void delete(Post post) {
        em.remove(em.contains(post) ? post : em.merge(post));
    }

}
