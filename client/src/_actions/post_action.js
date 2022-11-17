import axios from 'axios'
import {
    ADD_POST
} from './types'

export function addPost(dataToSubmit) {
    const request = axios.post('/api/post/add', dataToSubmit)
        .then(response => response.data)

    return {
        type: ADD_POST,
        payload: request
    }
}
