import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Auth from '../../hoc/auth'
import { List, ListItem, ListItemText, ListItemButton, Divider, Chip, IconButton, Link, Button } from '@mui/material';
import { getPosts } from '../../_actions/post_action'

const PageWrap = styled.div`
    display: flex;
    flex-direction:  column;
    align-items: center;
`

const ContentWrap = styled.div`
    width: 800px;
`

const CourtDescription = styled.div`
	display: flex;
    flex-direction: column;
	justify-content: center;
    height: 200px;
    h3 {
        font-weight: 300;
    }
`

const Board = styled.div`

`

const Post = styled.div`

`

const Buttons = styled.div`
    display: inline-block;
    float: right;
`

function CourtPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let { courtId } = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfCourt()
    }, [])

    const getPostsOfCourt = async () => {
        try {
            const data = await dispatch(getPosts(courtId))
            setPosts(data.payload)
        } catch (e) {
            alert('Error')
        }
    }
    
    const selectHandler = (elem) => {
		navigate('/post/' + courtId + '/detail/' + elem.postId)
	}

    const newPost = () => {
        navigate("/post/" + courtId + "/new")
    }

    return (
        <PageWrap>
            <ContentWrap>
                <CourtDescription>
                    <h1>반포농구장</h1>
                    <h3>솔샘로 174</h3>
                </CourtDescription>
                <Buttons>
                    <Button variant="contained" onClick={newPost}>새 글 쓰기</Button>
                </Buttons>
                <Board>
                    {posts.map((elem, index) => {
                        return (
                            <div key={index}>
                                <Post>
                                    <ListItem>
                                        <ListItemButton onClick={() => selectHandler(elem)}>
                                            <ListItemText primary={elem.title} secondary={elem.content}/>
                                        
                                        </ListItemButton>
                                    </ListItem>
                                </Post>
                                <Divider />
                            </div>
                        )
                    })}
                </Board>
            </ContentWrap>
        </PageWrap>
        
        
    )
}

export default Auth(CourtPage, null)