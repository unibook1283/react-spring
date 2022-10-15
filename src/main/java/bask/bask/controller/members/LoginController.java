package bask.bask.controller.members;

import bask.bask.controller.SessionConst;
import bask.bask.dto.LoginForm;
import bask.bask.domain.Member;
import bask.bask.exception.LoginException;
import bask.bask.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/api/login")
    public void login(@Valid @RequestBody LoginForm loginForm, HttpServletRequest request) {
        Member loginMember = loginService.login(loginForm.getEmail(), loginForm.getPassword());

        if (loginMember == null) {
            /**
             * 에러 처리
             */
            throw new LoginException("로그인 에러");
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember.getId());
    }

    @PostMapping("/api/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
    }
}
