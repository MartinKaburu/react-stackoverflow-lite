import { SIGIN_USER } from './index';

export const signinUser = (postUser) => dispatch => {
    // console.log('action called');
    let url = 'https://stackoverflow-lite-v2.herokuapp.com/api/v2/user/signin/';
        axios.post(url, postUser)
        .then(post => dispatch({
            type: SIGNIN_USER,
            payload: post
        }))
        .catch(err => console.error(err));
        