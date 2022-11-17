package bask.bask.domain;

import bask.bask.dto.PostDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {

    @Id
    @GeneratedValue
    @Column(name = "POST_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COURT_ID")
    private Court court;

    private String title;
    private String content;

    //== 연관관계 메서드 ==//
    public void setMember(Member member) {
        this.member = member;
        member.getPosts().add(this);
    }

    public void setCourt(Court court) {
        this.court = court;
        court.getPosts().add(this);
    }

    public static Post createPost(Member member, Court court, String title, String content) {
        Post post = new Post();
        post.setMember(member);
        post.setCourt(court);
        post.setTitle(title);
        post.setContent(content);
        return post;
    }

    public PostDto toPostDto(Long courtId) {
        return new PostDto(id, courtId, title, content);
    }
}
