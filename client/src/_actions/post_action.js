import axios from 'axios'
import {
    ADD_POST,
    GET_POSTS,
    GET_POST
} from './types'

export function addPost(dataToSubmit) {
    const request = axios.post('/api/post/add', dataToSubmit)
        .then(response => response.data)

    return {
        type: ADD_POST,
        payload: request
    }
}

export function getPosts(dataToSubmit) {
    const request = axios.get('/api/post/' + dataToSubmit)
        .then(response => response.data)

    return {
        type: GET_POSTS,
        payload: request
    }
}

export function getPost(dataToSubmit) {
    const request = axios.get('/api/post/' + dataToSubmit.courtId + '/' + dataToSubmit.postId)
        .then(response => response.data)

    return {
        type: GET_POST,
        payload: request
    }
}