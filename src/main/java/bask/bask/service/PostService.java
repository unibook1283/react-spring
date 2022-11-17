package bask.bask.service;

import bask.bask.domain.Court;
import bask.bask.domain.Member;
import bask.bask.domain.Post;
import bask.bask.repository.CourtRepository;
import bask.bask.repository.MemberRepository;
import bask.bask.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {

    final private PostRepository postRepository;
    final private MemberRepository memberRepository;
    final private CourtRepository courtRepository;

    @Transactional
    public Long savePost(Post post) {
        // favorite은 service에서 create하는데 post는 controller에서 create해서 보내게 구현함. ㄱㅊ?
        postRepository.save(post);
        return post.getId();
    }

    public Post findOne(Long postId) {
        return postRepository.findOne(postId);
    }

    public List<Post> findPosts() {
        return postRepository.findAll();
    }

    public List<Post> findPostsByMemberId(Long memberId) {
        Member member = memberRepository.findOne(memberId);
        return postRepository.findPostsByMember(member);
    }

    public List<Post> findPostsByCourtId(Long courtId) {
        Court court = courtRepository.findOne(courtId);
        return postRepository.findPostsByCourt(court);
    }
}
