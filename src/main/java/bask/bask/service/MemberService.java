package bask.bask.service;

import bask.bask.domain.Court;
import bask.bask.domain.Favorite;
import bask.bask.domain.Member;
import bask.bask.repository.CourtRepository;
import bask.bask.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MemberService {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    CourtRepository courtRepository;

    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if (!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }

    // 이거 맞나? 여기(service)다 쓰는거 어때?
    public void addFavoriteCourt(Long memberId, Long courtId) {
        Member member = memberRepository.findOne(memberId);
        Court court = courtRepository.findOne(courtId);

        Favorite favorite = new Favorite();
        favorite.setMember(member);
        favorite.setCourt(court);

        member.getFavorites().add(favorite);
        court.getFavorites().add(favorite);
    }
}
