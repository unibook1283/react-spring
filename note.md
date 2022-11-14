### Todo
1. redux -> RightMenu 마무리
2. favorite
3. 농구장 위치 정보 db에 몽땅 저장
4. map
5. 채팅
6. 동으로 검색 : 해당 동의 x, y좌표를 geocode로 받아서, 그 점에서 KDTree rangeQuery 해볼까. 딱 그건데.




```
public List<Favorite> findFavoriteByMember(Long memberId) {
        Member member = memberRepository.findOne(memberId);
        return favoriteRepository.findFavoritesByMember(member);
    }
```
```
public List<Favorite> findFavoriteByMember(Member member) {
        return favoriteRepository.findFavoritesByMember(member);
    }
```
(in FavoriteService)

memberId를 받는게 맞나? Member를 받는게 맞나? 이게 계속 고민되네.
controller의 입장을 생각해 보면 되는건가


Transactional 공부하기