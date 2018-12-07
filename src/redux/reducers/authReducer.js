import { CREATE_USER, SIGIN_USER } from '../actions/index';

const initialState = {
   user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            // console.log('reducer');
            return {
                ...state,
                user: action.payload
            };
            case SIGIN_USER:
                return {
                    ...state,
                    user: action.payload
                };
        default:
            return state;
    }
}