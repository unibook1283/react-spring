package bask.bask;

import bask.bask.domain.Court;
import bask.bask.domain.Member;
import bask.bask.service.CourtService;
import bask.bask.service.FavoriteService;
import bask.bask.service.MemberService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

@ContextConfiguration
@ExtendWith(SpringExtension.class)
@Transactional
@SpringBootTest
public class AddFavoriteTest {

    @Autowired
    MemberService memberService;
    @Autowired
    CourtService courtService;
    @Autowired
    FavoriteService favoriteService;
    @Test
    public void addFavorite() {
        Member member = new Member();
        member.setName("member1");
        memberService.join(member);

        Court court = new Court();
        court.setPlaceName("court1");
        courtService.saveCourt(court);
        favoriteService.favorite(member.getId(), court.getId());

        Assertions.assertThat(court.getFavorites().size()).isEqualTo(1);
    }
}
