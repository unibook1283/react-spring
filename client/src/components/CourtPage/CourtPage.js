import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Auth from '../../hoc/auth'
import { List, ListItem, ListItemText, ListItemButton, Divider, Chip, IconButton, Link, Button } from '@mui/material';
import { getPosts } from '../../_actions/post_action'
import { getCourt } from '../../_actions/court_action'

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

const AddressName = styled.div`
    display: flex;
    align-items: center;
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

    const [court, setCourt] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfCourt()
        getCourtFromDb()
    }, [])

    const getPostsOfCourt = async () => {
        try {
            const data = await dispatch(getPosts(courtId))
            setPosts(data.payload)
        } catch (e) {
            alert('Error')
        }
    }

    const getCourtFromDb = async () => {
        try {
            const data = await dispatch(getCourt(courtId))
            setCourt(data.payload)
        } catch (e) {
			alert(e.response.data.message)
        }
    }
    
    const selectHandler = (elem) => {
		navigate('/post/' + courtId + '/detail/' + elem.postId)
	}

    const newPost = () => {
        navigate("/post/" + courtId + "/new")
    }

    const showMap = () => {
        alert('준비중')
    }

    return (
        <PageWrap>
            <ContentWrap>
                <CourtDescription>
                    <h1>{court.placeName}</h1>
                    <AddressName>
                        <h3>{court.addressName}</h3>
                        <Button variant="outlined" sx={{ height: 30, mx: 2 }} onClick={showMap}>지도에서 보기</Button>
                    </AddressName>
                </CourtDescription>
                <Buttons>
                    <Button variant="contained" onClick={newPost}>새 글 쓰기</Button>
                </Buttons>
                
                <Board>
                    
                    {posts && posts.map((elem, index) => {
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
                {(posts.length === 0) && 
                    <h3>아직 글이 없습니다.</h3>
                }
            </ContentWrap>
        </PageWrap>
        
        
    )
}

export default Auth(CourtPage, null)