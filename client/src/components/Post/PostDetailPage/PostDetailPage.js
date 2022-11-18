import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getPost } from '../../../_actions/post_action';

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

function PostDetailPage() {
    const navigate = useNavigate()
	const dispatch = useDispatch()
    let { courtId, postId } = useParams()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

	useEffect(() => {
		getPostFromDb()
	}, [])
	
	const getPostFromDb = async () => {
		let body = {
			courtId,
			postId
		}
		try {
			const res = await dispatch(getPost(body))
			setTitle(res.payload.title)
			setContent(res.payload.content)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

    return (
        <PageWrap>
            <Wrapper>
                <Title>
                    <h2>{title}</h2>
                </Title>
                <Content>
                    <h3>{content}</h3>
                </Content>
            </Wrapper>
        </PageWrap>
    )
}

export default PostDetailPage