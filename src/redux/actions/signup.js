import { CREATE_USER } from './index';
import axios from 'axios';

export const createUser = (postUser) => dispatch => {
    // console.log('action called');
    let url = 'https://stackoverflow-lite-v2.herokuapp.com/api/v2/user/signup/';
        axios.post(url, postUser)
        .then(post => dispatch({
            type: CREATE_USER,
            payload: post
        }))
        .catch(err => console.error(err));
