import {SAMPLE_ACTION} from './sample-action-type';

export const sampleAction = (data) => {
    return {
        type: SAMPLE_ACTION,
        payload: data
    }
}

// export default sampleAction;