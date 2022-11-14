package bask.bask.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Favorite {

    @Id
    @GeneratedValue
    @Column(name = "FAVORITE_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COURT_ID")
    private Court court;

    //== 연관관계 메서드 ==//
    public void setMember(Member member) {
        this.member = member;
        member.getFavorites().add(this);
    }

    public void setCourt(Court court) {
        this.court = court;
        court.getFavorites().add(this);
    }

    /**
     * 아 연관관계 메서드가 favorite에 위치하는 이유 : favorite을 생성하는 곳이 여기니까.
     * Member에서 favorite을 생성하는게 아니잖아. Member에서 favorite을 생성할 일은 없으니까 Member 쪽에는 연관관계 메서드 필요없음.
     */

    public static Favorite createFavorite(Member member, Court court) {
        Favorite favorite = new Favorite();
        favorite.setMember(member);
        favorite.setCourt(court);
        return favorite;
    }

}
