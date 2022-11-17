import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Auth from '../../hoc/auth'
import { List, ListItem, ListItemText, ListItemButton, Divider, Chip, IconButton, Link, Button } from '@mui/material';

const PageWrap = styled.div`
    display: flex;
    flex-direction:  column;
    align-items: center;
`

const ContentWrap = styled.div`
    width: 800px;
    background: blue;
`

const CourtDescription = styled.div`
	display: flex;
    flex-direction: column;
	justify-content: center;
    height: 200px;
    background: lightblue;
    h3 {
        font-weight: 300;
    }
`

const Board = styled.div`

`

const Post = styled.div`

`

const Buttons = styled.div`

`

function CourtPage() {
    const navigate = useNavigate()
    let { courtId } = useParams()

    const [posts, setPosts] = useState([])


    const selectHandler = (elem) => {
		// navigate('/court/'+elem.id)
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
                    <Button onClick={newPost}>새 글 쓰기</Button>
                </Buttons>
                <Board>
                    {posts.map((elem, index) => {
                        return (
                            <div key={index}>
                                <Post>
                                    <ListItem>
                                        <ListItemButton onClick={() => selectHandler(elem)}>
                                            {/* <ListItemText primary={elem.placeName} secondary={elem.roadAddressName}/> */}
                                        
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