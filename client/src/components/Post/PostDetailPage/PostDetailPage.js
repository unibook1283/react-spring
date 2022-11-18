import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getPost } from '../../../_actions/post_action'
import { getMember } from '../../../_actions/member_action'
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
	margin-top: 20px;
`

function PostDetailPage() {
    const navigate = useNavigate()
	const dispatch = useDispatch()
    let { courtId, postId } = useParams()

	const [post, setPost] = useState({})

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
			setPost(res.payload)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

    return (
        <PageWrap>
            <Wrapper>
                <Title>
                    <h2>{post.title}</h2>
					{'작성자 : ' + post.memberName}
					<br/>
					{'작성일 : ' + post.createdDate?.substring(0, 10) + ' ' + post.createdDate?.substring(11, 16)}
                </Title>
                <Content>
                    {post.content}
                </Content>
            </Wrapper>
        </PageWrap>
    )
}

export default Auth(PostDetailPage, true)