import axios from 'axios'
import {
    GET_FAVORITE_COURTS,
    GET_FAVORITE_MEMBERS,
    DELETE_FAVORITE,
    ADD_FAVORITE
} from './types'

export function getFavoriteCourts() {
    const request = axios.get('/api/favorites/court')
        .then(response => response.data)

    return {
        type: GET_FAVORITE_COURTS,
        payload: request
    }
}

export function getFavoriteMembers(dataToSubmit) {
    const request = axios.get('/api/favorites/member/' + dataToSubmit)
        .then(response => response.data)

    return {
        type: GET_FAVORITE_MEMBERS,
        payload: request
    }
}

export function deleteFavorite(dataToSubmit) {
    const request = axios.post('/api/favorites/delete', dataToSubmit)
        .then(response => response.data)

    return {
        type: DELETE_FAVORITE,
        payload: request
    }
}

export function addFavorite(dataToSubmit) {
    const request = axios.post('/api/favorites/' + dataToSubmit + '/add', dataToSubmit)
        .then(response => response.data)

    return {
        type: ADD_FAVORITE,
        payload: request
    }
}