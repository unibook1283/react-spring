### Todo
- [x] redux -> RightMenu 마무리
- [x] favorite
- [x] 농구장 위치 정보 db에 몽땅 저장
- [x] map
- [ ] 채팅
- [x] 동으로 검색 : 해당 동의 x, y좌표를 geocode로 받아서, 그 점에서 KDTree rangeQuery 해볼까. 딱 그건데. -> 문자열 포함 검색으로 구현함.
- [x] favorite 중복 제거



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


목적에 따라 dto를 만들면, 같은 엔티티에 대해서 dto가 너무 많아진다. 
FavoriteCourtDto, KakaoCourtDto ...
https://velog.io/@aidenshin/DTO%EC%97%90-%EA%B4%80%ED%95%9C-%EA%B3%A0%EC%B0%B0

service가 아닌 controller(CourtController의 getCourts)에서 entity -> dto 변환 해준 근거
: service의 public List<Court> findCourts()는 entity list를 리턴하게 해놨기 때문.
지네릭을 쓰면 되려나?
