import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
`

const LoginWrap = styled.div`
    width: 400px;
    height: 300px;
`

const Inputs = styled.div`
    margin-bottom: 20px;
`
function EditCourtPage() {
    let id = useParams().id
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [addressName, setAddressName] = useState('')
    const [roadAddressName, setRoadAddressName] = useState('')
    const [goalPosts, setGoalPosts] = useState(0)
    const [floor, setFloor] = useState('')
    const [height, setHeight] = useState('')
    const [loading, setLoading] = useState(true)

	const nameChanged = (e) => {
		setName(e.target.value)
	}

    const addressNameChanged = (e) => {
		setAddressName(e.target.value)
	}

    const roadAddressNameChanged = (e) => {
		setRoadAddressName(e.target.value)
	}

    const goalPostsChanged = (e) => {
		setGoalPosts(e.target.value)
	}

    const floorChanged = (e) => {
		setFloor(e.target.value)
	}

    const heightChanged = (e) => {
		setHeight(e.target.value)
	}

	const submitHandler = async () => {
        let body ={
            name,
            addressName,
            roadAddressName,
            goalPosts,
            floor,
            height
        }
		const response = await axios.patch('/api/court/' + id, body)
		console.log(response)
		navigate('/courts')
	}

    useEffect(() => {
        async function fecthData() {
            const response = await axios.get('/api/court/' + id)
            setName(response.data.name)
            setAddressName(response.data.addressName)
            setRoadAddressName(response.data.roadAddressName)
            setGoalPosts(response.data.goalPosts)
            setFloor(response.data.floor)
            setHeight(response.data.height)
            setLoading(false)
        }
        fecthData()
    }, [])
    

    if (loading) return <div>Loading...</div>
	return (
		<PageWrap>
		<h1>Court 수정</h1>
		<LoginWrap>
			<TextField fullWidth id="outlined-basic" margin="dense" label="코트 이름" variant="outlined" size="small" defaultValue={name} onChange={nameChanged} />
            <TextField fullWidth id="outlined-basic" type='email' margin="dense" label="주소" variant="outlined" size="small" defaultValue={addressName} onChange={addressNameChanged} />
            <TextField fullWidth id="outlined-basic" type='email' margin="dense" label="도로명 주소" variant="outlined" size="small" defaultValue={roadAddressName} onChange={roadAddressNameChanged} />
			<TextField fullWidth id="outlined-basic" type='email' margin="dense" label="골대 개수" variant="outlined" size="small" defaultValue={goalPosts} onChange={goalPostsChanged} />

            <FormControl fullWidth margin="dense" size="small">
                <InputLabel>바닥 상태</InputLabel>
                <Select
                value={floor}
                onChange={floorChanged}
                defaultValue={floor}
                >
                    <MenuItem value={'우레탄'}>우레탄</MenuItem>
                    <MenuItem value={'플라스틱'}>플라스틱</MenuItem>
                    <MenuItem value={'마루'}>마루</MenuItem>
                    <MenuItem value={'아스팔트'}>아스팔트</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="dense" size="small">
                <InputLabel>골대 높이</InputLabel>
                <Select
                value={height}
                onChange={heightChanged}
                defaultValue={height}
                >
                    <MenuItem value={'높음'}>높음</MenuItem>
                    <MenuItem value={'보통'}>보통</MenuItem>
                    <MenuItem value={'낮음'}>낮음</MenuItem>
                    <MenuItem value={'모름'}>모름</MenuItem>
                </Select>
            </FormControl>

			<Button fullWidth margin="dense" variant="contained" sx={{ my: 2 }} onClick={submitHandler} >코트 수정</Button>
		</LoginWrap>
		</PageWrap>
	)
}

export default EditCourtPage