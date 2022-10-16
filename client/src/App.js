import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import MembersPage from './components/MembersPage/MembersPage'
import CourtsPage from './components/CourtPage/CourtsPage'
import EditCourtPage from './components/CourtPage/EditCourtPage'
import NewCourtPage from './components/CourtPage/NewCourtPage'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import NavBar from './components/NavBar/NavBar'

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
			<Route exact path="/courts" element = {<CourtsPage/>}/>
			<Route exact path="/courts/new" element = {<NewCourtPage/>}/>
			<Route exact path="/courts/edit/:id" element = {<EditCourtPage/>}/>
			</Routes>
		</div>
	</BrowserRouter>
	)
}

export default App