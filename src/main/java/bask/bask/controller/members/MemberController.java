package bask.bask.controller.members;

import bask.bask.controller.SessionConst;
import bask.bask.dto.AuthDto;
import bask.bask.dto.MemberForm;
import bask.bask.domain.Member;
import bask.bask.exception.UnauthorizedException;
import bask.bask.service.MemberService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;
    private ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping("/api/members/new")
    public Member create(@Valid @RequestBody MemberForm memberForm) {

        Member member = memberForm.toMember();
        System.out.println("member.getName() = " + member.getName());
        System.out.println("member.getEmail() = " + member.getEmail());
        System.out.println("member.getPhoneNumber() = " + member.getPhoneNumber());
        System.out.println("member.getPassword() = " + member.getPassword());
        memberService.join(member);
        return member;
    }

    @GetMapping("/api/members/auth")
    public AuthDto auth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();

        Boolean isAuth = true;
        if (session == null || session.getAttribute(SessionConst.LOGIN_MEMBER) == null) {
            isAuth = false;
//            throw new UnauthorizedException("미인증 사용자 요청");
        }

        return new AuthDto(isAuth, false, 0);
//        AuthDto authDto = new AuthDto(isAuth, false, 0);
//        String result = objectMapper.writeValueAsString(authDto);
//
//        response.getWriter().write(result);
    }
}
