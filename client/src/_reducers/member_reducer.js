import {
    LOGIN_MEMBER,
    REGISTER_MEMBER,
    LOGOUT_MEMBER,
    AUTH_MEMBER
} from '../_actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_MEMBER:
            return { ...state, data: action.payload }
        case REGISTER_MEMBER:
            return { ...state, data: action.payload }
        case LOGOUT_MEMBER:
            return { ...state, data: action.payload }
        case AUTH_MEMBER:
            return { ...state, data: action.payload }
        default:
            return state
    }
}