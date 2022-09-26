import { AppBar, Toolbar, Button, Typography, ButtonBase } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import RightMenu from './Sections/RightMenu';

function NavBar() {
    const navigate = useNavigate()


  return (
    <AppBar color='inherit' position='static'>
        <Toolbar>
            <ButtonBase edge='start' disableRipple sx={{mr: 3}}>
                <Typography variant='h5' onClick={() => navigate('/')} >
                    Home
                </Typography>
            </ButtonBase>
            <Button onClick={() => navigate('/members')} sx={{minWidth: 80, mx: 0.5}}>회원 목록</Button>
            <Button onClick={() => navigate('/courts/new')} sx={{minWidth: 80, mx: 0.5}}>코트 등록</Button>
            <Button onClick={() => navigate('/courts')} sx={{minWidth: 80, mx: 0.5}}>코트 목록</Button>
            <RightMenu/>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
