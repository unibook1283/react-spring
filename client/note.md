### 9/23
- 수정 페이지 만들던 중.
- court 목록에서 수정을 누르면, 해당 court의 id를 수정 페이지의 url에서 parameter로 받아온다.
 그 id로 다시 서버에 findById로 court 정보를 다시 받아오는데, 이 방법밖에 없나?
 - 이러면 서버에 두 번 접근해야됨.

 ### 9/23
 - 하나 배웠다.
 - useEffect에서 async await으로 fetching해올 때, fetch 후 setState하기 전에 화면이 rendering되어버리는 문제.
 - loading이라는 state를 둬서, fetch가 끝나면 loading 값을 바꿔줌.
 - rendering하는 부분
 ``` javascript
 if (loading) return <div>Loading...</div>
return (
)
```
- loading이라는 값 말고 다른걸로도 할 수 있겠네. if문을 적절히 써서.