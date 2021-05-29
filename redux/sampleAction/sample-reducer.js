import {SAMPLE_ACTION} from './sample-action-type';

let initialState = '';
export const sampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAMPLE_ACTION:
            return action.payload;
        default:
            return 'data lost';
    }
}

// export default sampleReducer;