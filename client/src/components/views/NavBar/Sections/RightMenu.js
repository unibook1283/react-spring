import React, { useState, useEffect } from 'react'
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const MenuWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`

function RightMenu() {
    const navigate = useNavigate()

    const [auth, setAuth] = useState(false)

    // redux로 바꿀 때, useSelector 써서 고치자.
    useEffect(() => {
        axios.get("/api/members/auth")
        .then((res) => {
            console.log(res.data.isAuth)
            setAuth(res.data.isAuth)
        })
    }, [])
    
    const logoutHandler = async () => {
        try {
            await axios.post("/api/logout")
            // 밑에 일단 이렇게 해놈. redux로 고쳐야겠다.
            // 로그인할때는 setAuth를 할 수가 없으니.
            setAuth(false)
        } catch (e) {
            console.log(e)
        }
    }

    if (auth) {
        return (
            <MenuWrap>
                <Button onClick={logoutHandler}>로그아웃</Button>
            </MenuWrap>
        )
    } 
    return (
            <MenuWrap>
                <Button onClick={() => navigate('/register')}>회원 가입</Button>
                <Divider sx={{mx: 2}} orientation='vertical' variant='middle' flexItem />
                <Button onClick={() => navigate('/login')}>로그인</Button>
            </MenuWrap>
        )
}
  
export default RightMenu