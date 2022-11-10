import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TextField, Button, Link, Modal, Box } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import Auth from '../../hoc/auth'
import { useDispatch } from 'react-redux'
import Map from './Sections/Map'

const PageWrap = styled.div`
    display: flex;
`

const InfoWrap = styled.div`
    height: calc(100vh - 65px);
    display: flex;
    flex-direction: column;
`

const MainInfo = styled.div`
    flex: auto;
`

const Search = styled.div`
    width: 400px;

    display: flex;
    margin: 15px 10px 10px 10px;
`

const HeaderInfo = styled.div`
    text-align: center;
    height:90px;
`

const PlaceName = styled.h1`
    padding-top: 18px;
    font-size: 18px;
    font-weight: 300;
`

const RoadAddressName = styled.h2`
    font-size: 12px;
    font-weight: 200;
`

const Buttons = styled.div`
    width: 387px;
`

const RequestCourt = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: bottom;
`

function MapPage() {
    let { address, id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('성수동')
    const [position, setPosition] = useState({
        lat: 37.542108,
        lng: 127.04965
    })
    const [detail, setDetail] = useState({})
    const [open, setOpen] = useState(false)
    const [newCourt, setNewCourt] = useState()
    const [dbc, setDbc] = useState([])

    async function geocode (address) {
        let url = `/map-geocode/v2/geocode?query=${address}`

        try {
            const response = await axios.get(url, {
                headers: {
                    'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_GEOCODE_KEY_ID,
                    'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_GEOCODE_KEY
                }
            })

            setPosition({
                lat: response.data.addresses[0].y,
                lng: response.data.addresses[0].x
            })
        } catch (e) {
            console.log(e)
        } 
    }

    const searchTextChanged = (e) => {
        setSearchText(e.target.value)
    }

    const searchHandler = (e) => {
        navigate(`/map/${searchText}`)
    }
    
    useEffect(() => {
        geocode("성수동")
    }, [])
    

  return (
    <PageWrap>
        <InfoWrap>
            <MainInfo>
                <Search>
                    <TextField fullWidth label='동으로 검색 ex) 성수동' size='small' onChange={searchTextChanged} />
                    <Button variant='contained' sx={{ml: 1}} onClick={searchHandler}>검색</Button>
                </Search>
                <HeaderInfo>
                    <PlaceName>{id && detail.place_name}</PlaceName>
                    <RoadAddressName>{id && detail.road_address_name}</RoadAddressName>
                </HeaderInfo>
                {detail.id && (
                    <Buttons>
                        {/* <Button fullWidth href={detail.place_url} variant='contained' sx={{ mx: 2 }} >카카오맵에서 검색</Button> */}
                        <Button fullWidth variant='contained' sx={{ mx: 2, my: 1 }} >즐겨찾기에 추가</Button>
                    </Buttons>
                )}
            </MainInfo>

            
            {/* <RequestCourt>
                <Button onClick={() => setOpen(true)}>찾으시는 코트가 없나요?</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}

                >
                    <Box sx={style}>
                        <Request setOpen={setOpen} newCourt={newCourt} />
                    </Box>
                </Modal>
            </RequestCourt> */}
            
        </InfoWrap>
        <Map />
    </PageWrap>
  )
}

export default Auth(MapPage, null)