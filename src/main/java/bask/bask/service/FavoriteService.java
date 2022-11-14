package bask.bask.service;

import bask.bask.domain.Court;
import bask.bask.domain.Favorite;
import bask.bask.domain.Member;
import bask.bask.repository.CourtRepository;
import bask.bask.repository.FavoriteRepository;
import bask.bask.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FavoriteService {

    private final MemberRepository memberRepository;
    private final CourtRepository courtRepository;
    private final FavoriteRepository favoriteRepository;

    @Transactional
    public Long favorite(Long memberId, Long courtId) {
        Member member = memberRepository.findOne(memberId);
        Court court = courtRepository.findOne(courtId);

        Favorite favorite = Favorite.createFavorite(member, court);
        favoriteRepository.save(favorite);

        return favorite.getId();
    }

    @Transactional
    public void deleteFavorite(Long favoriteId) {
        Favorite favorite = favoriteRepository.findOne(favoriteId);
        favoriteRepository.delete(favorite);
    }

    // memberId를 받는게 맞나? Member를 받는게 맞나?
    public List<Favorite> findFavoriteByMember(Long memberId) {
        Member member = memberRepository.findOne(memberId);
        return favoriteRepository.findFavoritesByMember(member);
    }

//    public List<Favorite> findFavoriteByMember(Member member) {
//        return favoriteRepository.findFavoritesByMember(member);
//    }

}
