package bask.bask.controller;

import bask.bask.domain.Member;
import bask.bask.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/api/login")
    public void login(@RequestBody String loginId, @RequestBody String password, HttpServletRequest request) {
        Member loginMember = loginService.login(loginId, password);

        if (loginMember == null) {
            /**
             * 에러 처리
             */
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember.getId());
    }

}
