import React, { useState, useEffect } from 'react'
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logoutMember } from '../../../_actions/member_action'

const MenuWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`

function RightMenu() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const member = useSelector(state => state.member)

    const logoutHandler = async () => {
        try {
            await dispatch(logoutMember())
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    if (member.data && member.data.isAuth) {
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