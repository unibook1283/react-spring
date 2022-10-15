import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Auth from '../../../hoc/auth'

const PageWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 80vh;
`

function CourtsPage() {
	const navigate = useNavigate()

	const [courts, setCourts] = useState([])

	useEffect(() => {
		axios.get('/api/court')
		.then(result => setCourts(result.data))
	}, [])

	const editHandler = (court) => {
		navigate('/courts/edit/' + court.id)
	}

	const removeHandler = async (elem) => {
		const deleted = await axios.post('/api/court/delete', elem)
		setCourts(courts.filter(court => court.id !== deleted.data.id))
		alert('삭제')
	}
	
	return (
		<PageWrap>
			<h1>CourtsPage</h1>
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>코트 이름</TableCell>
							<TableCell align="right">주소</TableCell>
							<TableCell align="right">도로명 주소</TableCell>
							<TableCell align="right">골대 개수</TableCell>
							<TableCell align="right">바닥 상태</TableCell>
							<TableCell align="right">골대 높이</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{courts.map((court) => (
						<TableRow
						key={court.id}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{court.name}
							</TableCell>
							<TableCell align="right">{court.addressName}</TableCell>
							<TableCell align="right">{court.roadAddressName}</TableCell>
							<TableCell align="right">{court.goalPosts}</TableCell>
							<TableCell align="right">{court.floor}</TableCell>
							<TableCell align="right">{court.height}</TableCell>
							<TableCell>
								<Button variant="contained" sx={{ m: 1 }} onClick={() => editHandler(court)} >수정</Button>
								<Button variant="contained" sx={{ m: 1 }} onClick={() => removeHandler(court)} >삭제</Button>
							</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</TableContainer>
		</PageWrap>
	)
}

export default Auth(CourtsPage, true)