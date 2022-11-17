package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.domain.Member;
import bask.bask.domain.Post;
import bask.bask.dto.PostDto;
import bask.bask.service.CourtService;
import bask.bask.service.MemberService;
import bask.bask.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
public class PostController {

    final private MemberService memberService;
    final private CourtService courtService;
    final private PostService postService;

    @PostMapping("/api/post/add")
    public void savePost(@RequestBody PostDto postDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long memberId = (Long) session.getAttribute(SessionConst.LOGIN_MEMBER);
        Member member = memberService.findOne(memberId);

        Court court = courtService.findOne(postDto.getCourtId());

        Post post = Post.createPost(member, court, postDto.getTitle(), postDto.getContent());
        postService.savePost(post);
    }
}
