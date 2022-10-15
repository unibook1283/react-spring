import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Auth from '../../../hoc/auth'

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

function RegisterPage() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const nameChanged = (e) => {
		setName(e.target.value)
	}

	const emailChanged = (e) => {
		setEmail(e.target.value)
	}

	const phoneNumberChanged = (e) => {
		setPhoneNumber(e.target.value)
	}

	const passwordChanged = (e) => {
		setPassword(e.target.value)
	}

	const confirmPasswordChanged = (e) => {
		setConfirmPassword(e.target.value)
	}

	const registerHandler = async () => {
		if (password !== confirmPassword) {
			return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
		}
		if (password.length < 8) {
			return alert('비밀번호는 8글자 이상이어야 합니다.')
		}
		let body = {
			name,
			email,
			phoneNumber,
			password
		}
		try {
			await axios.post('/api/members/new', body)
			navigate('/login')
		} catch (e) {
			// console.log(e)
			alert(e.response.data.message)
		}
	}

	return (
		<PageWrap>
		<h1>RegisterPage</h1>
		<LoginWrap>
			<TextField fullWidth id="outlined-basic" margin="dense" label="이름" variant="outlined" size="small" onChange={nameChanged} />
			<TextField fullWidth id="outlined-basic" type='email' margin="dense" label="이메일" variant="outlined" size="small" onChange={emailChanged} />
			<TextField fullWidth id="outlined-basic" type='tel' margin="dense" label="전화번호" variant="outlined" size="small" onChange={phoneNumberChanged} />
			<TextField fullWidth id="outlined-basic" type='password' margin="dense" label="비밀번호" variant="outlined" size="small" onChange={passwordChanged} />
			<TextField fullWidth id="outlined-basic" type='password' margin="dense" label="비밀번호 확인" variant="outlined" size="small" onChange={confirmPasswordChanged} />
			<Button fullWidth margin="dense" variant="contained" sx={{ my: 2 }} onClick={registerHandler} >회원 가입</Button>
		</LoginWrap>
		</PageWrap>
	)
}

export default Auth(RegisterPage, false)