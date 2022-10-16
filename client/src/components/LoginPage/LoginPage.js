import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Auth from '../../hoc/auth'
import { useDispatch } from 'react-redux'
import { loginMember } from '../../_actions/member_action'

const PageWrap = styled.div`
  	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 80vh;
`

const LoginWrap = styled.div`
    margin-top: 20px;
    width: 400px;
    height: 300px;
`

function LoginPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const emailChanged = (e) => {
		setEmail(e.target.value)
	}

	const passwordChanged = (e) => {
		setPassword(e.target.value)
	}

	const loginHandler = async () => {
		let body = {
			email,
			password
		}
		try {
			await dispatch(loginMember(body))
			// console.log(response)
			navigate('/')
		} catch (e) {
			// console.log(e)
			alert(e.response.data.message)
		}
	}

	return (
		<PageWrap>
		<h1>LoginPage</h1>
		<LoginWrap>
			<TextField fullWidth type='email' margin="dense" label="이메일" variant="outlined" size="small" onChange={emailChanged} />
			<TextField fullWidth type='password' margin="dense" label="비밀번호" variant="outlined" size="small" onChange={passwordChanged} />
			<Button fullWidth margin="dense" variant="contained" sx={{ my: 2 }} onClick={loginHandler} >로그인</Button>
		</LoginWrap>
		</PageWrap>
	)
}

export default Auth(LoginPage, false)