import axios from 'axios'
import {
    LOGIN_MEMBER,
    REGISTER_MEMBER,
    LOGOUT_MEMBER,
    AUTH_MEMBER,
    GET_MEMBER
} from './types'

export function loginMember(dataToSubmit) {
    const request = axios.post('/api/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_MEMBER,
        payload: request
    }
}

export function registerMember(dataToSubmit) {
    const request = axios.post('/api/members/new', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_MEMBER,
        payload: request
    }
}

export function logoutMember() {
    const request = axios.post('/api/logout')
        .then(response => response.data)

    return {
        type: LOGOUT_MEMBER,
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/members/auth')
        .then(response => response.data)

    return {
        type: AUTH_MEMBER,
        payload: request
    }
}

export function getMember(dataToSubmit) {
    const request = axios.get('/api/members/' + dataToSubmit)
        .then(response => response.data)

    return {
        type: GET_MEMBER,
        payload: request
    }
}