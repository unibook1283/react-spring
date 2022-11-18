import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material';
import { addPost } from '../../../_actions/post_action';
import Auth from '../../../hoc/auth'

const PageWrap = styled.div`
    display: flex;
    flex-direction:  column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 800px;
`

const Title = styled.div`

`

const Content = styled.div`

`

const ButtonWrap = styled.div`
    display: inline-block;
    float: right;
`

function PostPage() {
    const navigate = useNavigate()
	const dispatch = useDispatch()
    let { courtId } = useParams()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleChanged = (e) => {
        setTitle(e.target.value)
    }

    const contentChanged = (e) => {
        setContent(e.target.value)
    }

    const cancelHandler = () => {
        navigate('/court/' + courtId)
    }

    const saveHandler = async () => {
        let body = {
            courtId,
            title,
            content,
        }
        
        try {
            const res = await dispatch(addPost(body))
            navigate("/post/" + courtId + "/detail/" + res.payload)
        } catch (e) {
            alert('Error')
        }
    }

    return (
        <PageWrap>
            <Wrapper>
                <Title>
                    <h2>제목</h2>
                    <TextField id="outlined-basic" label="제목" variant="outlined" fullWidth onChange={titleChanged}/>
                </Title>
                <Content>
                    <h2>내용</h2>
                    <TextField id="outlined-basic" label="내용" variant="outlined" fullWidth multiline rows={10} onChange={contentChanged}/>
                </Content>
                <ButtonWrap>
                    <Button variant="contained" sx={{ mt: 2, mx: 1 }} onClick={saveHandler}>저장</Button>
                    <Button variant="outlined" sx={{ mt: 2 }} onClick={cancelHandler}>취소</Button>
                </ButtonWrap>
            </Wrapper>
        </PageWrap>
    )
}

export default Auth(PostPage, true)