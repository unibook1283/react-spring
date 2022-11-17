import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import MembersPage from './components/MembersPage/MembersPage'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import NavBar from './components/NavBar/NavBar'
import MapPage from './components/MapPage/MapPage'
import FavoritePage from './components/FavoritePage/FavoritePage'
import CourtPage from './components/CourtPage/CourtPage'

function App() {
	return (
	<BrowserRouter>
		<NavBar/>
		<div>
			<Routes>
			<Route exact path="/" element = {<LandingPage/>}/>
			<Route exact path="/login" element = {<LoginPage/>}/>
			<Route exact path="/register" element = {<RegisterPage/>}/>
			<Route exact path="/members" element = {<MembersPage/>}/>
			<Route exact path="/map" element = {<MapPage/>}/>
            <Route exact path="/map/:address" element={<MapPage />} />
            <Route exact path="/map/:address/:id" element={<MapPage />} />
            <Route exact path="/favorite" element={<FavoritePage />} />
			<Route exact path="/court/:id" element={<CourtPage />} />
			</Routes>
		</div>
	</BrowserRouter>
	)
}

export default App