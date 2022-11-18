package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.domain.Member;
import bask.bask.domain.Post;
import bask.bask.dto.PostDto;
import bask.bask.service.CourtService;
import bask.bask.service.MemberService;
import bask.bask.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PostController {

    final private MemberService memberService;
    final private CourtService courtService;
    final private PostService postService;

    @PostMapping("/api/post/add")
    public Long savePost(@RequestBody PostDto postDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long memberId = (Long) session.getAttribute(SessionConst.LOGIN_MEMBER);
        Member member = memberService.findOne(memberId);

        Court court = courtService.findOne(postDto.getCourtId());

        Post post = Post.createPost(member, court, postDto.getTitle(), postDto.getContent());
        Long postId = postService.savePost(post);
        return postId;
    }

    @GetMapping("/api/post/{courtId}")
    public List<PostDto> findPostsByCourtId(@PathVariable Long courtId) {
        List<PostDto> posts = postService.findPostsByCourtId(courtId)
                .stream()
                .sorted(Comparator.comparing(Post::getCreatedDate).reversed())
                .map(post -> post.toPostDto(courtId))
                .collect(Collectors.toList());
        return posts;
    }

    @GetMapping("/api/post/{courtId}/id/{postId}")
    public PostDto findPostByPostId(@PathVariable Long courtId, @PathVariable Long postId) {
        Post post = postService.findOne(postId);
        return post.toPostDto(courtId);
    }

}
