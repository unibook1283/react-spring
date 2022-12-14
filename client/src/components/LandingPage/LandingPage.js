import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Auth from '../../hoc/auth'

const PageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 80vh;
`
	
function LandingPage() {

	return (
		<PageWrap>
		<h1>LandingPage</h1>
		<br/>
		<Link to='/register'>회원 가입</Link>
		<br/>
		<Link to='/login'>로그인</Link>
		<br/>
		<Link to='/members'>회원 목록</Link>
		<br/>
		<Link to='/courts/new'>코트 등록</Link>
		<br/>
		<Link to='/courts'>코트 목록</Link>
		<br/>
		<Link to='/map'>map</Link>
		<br />
		<Link to='/favorite'>favorite</Link>
		<br />
		</PageWrap>
	)
}

export default Auth(LandingPage, null)