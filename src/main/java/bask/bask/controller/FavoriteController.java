package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FavoriteController {

    @Autowired
    MemberService memberService;

    @PostMapping("/api/favorites/add")
    public void createCourt(@RequestBody Court court) {

    }
}
