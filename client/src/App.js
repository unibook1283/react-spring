import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import MembersPage from './components/views/MembersPage/MembersPage'
import CourtsPage from './components/views/CourtPage/CourtsPage'
import EditCourtPage from './components/views/CourtPage/EditCourtPage'
import NewCourtPage from './components/views/CourtPage/NewCourtPage'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<LandingPage/>}/>
      <Route exact path="/login" element = {<LoginPage/>}/>
      <Route exact path="/register" element = {<RegisterPage/>}/>
      <Route exact path="/members" element = {<MembersPage/>}/>
      <Route exact path="/courts" element = {<CourtsPage/>}/>
      <Route exact path="/courts/new" element = {<NewCourtPage/>}/>
      <Route exact path="/courts/edit/:id" element = {<EditCourtPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App