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

### 9/24
- http delete method에 body를 보내고 있었다. 전에는 get에 그랬던 것 같은데.

### 9/25
= CourtsPage.js
```js
	const removeHandler = async (elem) => {
		const deleted = await axios.post('/api/court/delete', elem)
		setCourts(courts.filter(court => court !== deleted.data))
		alert('삭제')
	}
```
filter 부분을 보면 state인 courts배열의 court 객체와 server로부터 받아온 deleted.data 객체를 !==로 비교하고 있다.
객체간의 === 비교는 참조값도 비교하므로, 여기서는 그 값이 모두 같더라도 참조값이 다르기 때문에 걸러지지 않는다.
이 객체의 primary key인 id로 비교하는 코드로 바꿔서 해결했다.
```js
		setCourts(courts.filter(court => court.id !== deleted.data.id))
```
이 전에는 state가 바뀔 때마다 useEffect에서 server에 get 요청을 받아와서 setCourt하는 방식으로 했었는데, 무한루프를 돌면서 받아왔었다.
잘 해결한듯.
