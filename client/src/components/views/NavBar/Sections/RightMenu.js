import React from 'react'
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const MenuWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`

function RightMenu() {
    const navigate = useNavigate()

    return (
        <MenuWrap>
            <Button onClick={() => navigate('/register')}>회원 가입</Button>
            <Divider sx={{mx: 2}} orientation='vertical' variant='middle' flexItem />
            <Button onClick={() => navigate('/login')}>로그인</Button>
        </MenuWrap>
    )
}
  
export default RightMenu