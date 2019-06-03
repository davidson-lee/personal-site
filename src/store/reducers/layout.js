import { LAYOUT_TYPES } from '../types'

const INITIAL_STATE = {
    headerVisible: false
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case LAYOUT_TYPES.SET_HEADER:
            if (action.payload !== state.headerVisible)
                return {...state, headerVisible: action.payload };
            else break;
        default:
            return state;
    }
}