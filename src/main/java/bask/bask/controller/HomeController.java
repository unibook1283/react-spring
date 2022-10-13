package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.exception.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;

@RestController
public class HomeController {

    @Autowired
    EntityManager em;
    @RequestMapping("/")
    public String home() {
        return "home";
    }
    @Transactional
    @GetMapping("/api/hello")
    public String apihello() {
        Court court = new Court();
        court.setName("lkj");
        em.persist(court);
        em.flush();
        em.close();
        return "hello!!";
    }

    @GetMapping("/api/response-status-ex1")
    public String responseStatusEx1() {
        throw new BadRequestException();
    }
}
