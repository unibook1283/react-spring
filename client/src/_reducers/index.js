import { combineReducers } from 'redux'
import member from './member_reducer'
import favorite from './favorite_reducer'
import court from './court_reducer'
import post from './post_reducer'

const rootReducer = combineReducers({
    member,
    favorite,
    court,
    post
})

export default rootReducer