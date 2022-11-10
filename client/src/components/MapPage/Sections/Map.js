import React from 'react'
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

export default class App extends React.Component {
    render() {
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
                    defaultZoom={12}
                    naverRef={ref => { this.mapRef = ref }}
                >
                </NaverMap>
            </RenderAfterNavermapsLoaded>
        )
    }
}

