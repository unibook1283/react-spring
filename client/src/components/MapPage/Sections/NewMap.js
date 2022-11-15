import React from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'

export default class App extends React.Component {

    render() {

        const { position, setDetail, searchText, navigate, newCourt, setNewCourt, dbc } = this.props;

        const markerClicked = (elem) => {
            setDetail(elem)
            navigate(`/map/${searchText}/${elem.id}`)
        }

        const rightClick = (coord) => {
            console.log('test', coord)
            setNewCourt({ lat: coord._lat, lng: coord._lng })
        }

        return (
            <RenderAfterNavermapsLoaded
                ncpClientId={'uekcztg8vy'}
            >
                <NaverMap 
                    id="maps-access-instance"
                    style={{
                        width: '85vw',
                        height: 'calc(100vh - 65px)',
                    }}
                    defaultCenter={position}
                    onRightclick={pointerEvent => rightClick(pointerEvent.coord)}
                    defaultZoom={12}
                    naverRef={ref => { this.mapRef = ref }}
                >
                    {newCourt && (
                        <Marker
                            // icon={{
                            //     // src: '~/client/public/img/basketball.png'
                            //     // src: '../../../../public/img/basketball.png'
                            // }}
                            // animation={navermaps.Animation.BOUNCE}
                            position={newCourt}
                            onClick={() => {
                                alert('newCourt!')
                            }}
                        />
                    )}
                    {dbc && dbc.map((elem, index) => {
                        return (
                            <Marker
                                key={index}
                                position={{ lat: elem.y, lng: elem.x }}
                                onClick={() => markerClicked(elem)}
                            />
                        )
                    })}
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        )
    }
}

