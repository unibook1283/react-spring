import React, { useState, useEffect } from 'react'
import Auth from '../../hoc/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getFavoriteCourts, deleteFavorite } from '../../_actions/favorite_action'
import styled from 'styled-components'
import { List, ListItem, ListItemText, ListItemButton, Divider, Chip, IconButton, Link } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
`

const FavoriteList = styled.div`
	display: flex;
	justify-content: center;
`

const FavoriteElement = styled.div`
  	display: flex;
`

const Nothing = styled.div`
	display: flex;
	justify-content: center;
`


function FavoritePage() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [favoriteCourts, setFavoriteCourts] = useState([])

	const getFav = async () => {
		try {
			// 로그인 안 한 상태로 이 페이지에 들어가면 에러 메시지가 두 번 나옴.
			// 왜 이러지?
			const data = await dispatch(getFavoriteCourts())
			setFavoriteCourts(data.payload)
		} catch (e) {
			alert(e.response.data.message)
		}
	}
	useEffect(() => {
		getFav()
	}, [])

	const selectHandler = (elem) => {
		navigate('/court/'+elem.id)
	}

	const deleteHandler = async (elem) => {
		try {
			const deleted = await dispatch(deleteFavorite(elem))
			setFavoriteCourts(favoriteCourts.filter(favoriteCourt => favoriteCourt.favoriteId !== deleted.payload.favoriteId))
			alert('삭제')
		} catch (e) {
			alert('Error')
		}
	}
	
	return (
		<div>
		<ImageWrap>
			<img src="img/tan-kuen-yuen-cXXuAUCTihQ-unsplash.jpg" width="1000px" height="400px" />
		</ImageWrap>
		{(favoriteCourts.length === 0) && 
			<Nothing>
			<Link href='/map'>새로운 농구장 추가하러 가기</Link>
			</Nothing>
		}
		<FavoriteList>
			<List sx={{width: 900}}>
			{favoriteCourts && favoriteCourts.map((elem, index) => {  // favorites가 있을 때만 map 실행.
				return (                                      // 이거 안하면 Uncaught TypeError: Cannot read properties of undefined (reading 'map') 이런 에러가 나오네.
				<div key={index}>
					<FavoriteElement>
					<ListItem>
						<ListItemButton onClick={() => selectHandler(elem)}>
						<ListItemText primary={elem.placeName} secondary={elem.roadAddressName}/>
						<Chip icon={<PeopleIcon />} label={elem.favoriteMemberCnt} />
						
						</ListItemButton>
						<IconButton onClick={() => deleteHandler(elem)} sx={{ml: 1}}>
						<DeleteIcon />
						</IconButton>
					</ListItem>
					</FavoriteElement>
					<Divider />
				</div>
				
				)
			})}
			</List>
		</FavoriteList>
		</div>
	)
}

export default Auth(FavoritePage, true)