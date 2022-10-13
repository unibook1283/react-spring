import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PageWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

function LoginPage() {
	const navigate = useNavigate()

	// exception handling 연습
	// react 책좀 봐보자. 
	useEffect(async () => {
		try {
			let body = {
				loginId : "qwer",
				password : "qwer"
			}
			await axios.post("/api/login", body)
			.then(response => console.log(response))
		} catch (e) {
			alert(e.message)
			navigate('/')
		}
		
	}, [])
	
	return (
		<div>LoginPage</div>
	)
}

export default LoginPage