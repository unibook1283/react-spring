package bask.bask;

import bask.bask.domain.Member;
import bask.bask.repository.MemberRepository;
import bask.bask.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

//@ContextConfiguration(locations = "file:src/main/resources/META-INF/persistence.xml")
@ContextConfiguration
@ExtendWith(SpringExtension.class)
@Transactional
@SpringBootTest
public class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;

    @Test
//    @Commit
    public void 회원가입() {

        Member member = new Member();
        member.setName("qwer");

        Long memberId = memberService.join(member);
        System.out.println("memberId = " + memberId);
        Member findMember = memberRepository.findOne(memberId);

//        System.out.println("findMember.getName() = " + findMember.getName());
//        System.out.println("member.getName() = " + member.getName());

        Assertions.assertEquals(member, memberRepository.findOne(memberId));
    }
}
