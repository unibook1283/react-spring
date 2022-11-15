package bask.bask.controller;

import bask.bask.domain.Favorite;
import bask.bask.domain.Member;
import bask.bask.dto.FavoriteCourtDto;
import bask.bask.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;

    @PostMapping("/api/favorites/{courtId}/add")
    public void addFavorite(@PathVariable Long courtId, HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long memberId = (Long) session.getAttribute(SessionConst.LOGIN_MEMBER);
        favoriteService.favorite(memberId, courtId);
    }

    // url 별로인듯
    @GetMapping("/api/favorites/court")
    public List<FavoriteCourtDto> getFavoriteCourtsOfMember(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Long memberId = (Long) session.getAttribute(SessionConst.LOGIN_MEMBER);

        List<FavoriteCourtDto> findCourts = new ArrayList<FavoriteCourtDto>();
        List<Favorite> favorites = favoriteService.findFavoriteByMember(memberId);
        favorites.forEach(favorite -> findCourts.add(favorite.getCourt().toFavoriteCourtDto(favorite.getId())));
        return findCourts;
    }

    // url 별로인듯
    @GetMapping("/api/favorites/member/{courtId}")
    public List<Member> getFavoritedMembersOfCourt(@PathVariable Long courtId) {
        List<Member> findMembers = new ArrayList<Member>();
        List<Favorite> favorites = favoriteService.findFavoriteByMember(courtId);
        favorites.forEach(favorite -> findMembers.add(favorite.getMember()));
        return findMembers;
    }

    @PostMapping("/api/favorites/delete")
    public FavoriteCourtDto deleteFavoriteCourt(@RequestBody FavoriteCourtDto favoriteCourtDto) {
        favoriteService.deleteFavoriteByCourtId(favoriteCourtDto.getFavoriteId());
        return favoriteCourtDto;
    }
}
