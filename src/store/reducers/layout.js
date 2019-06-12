import { LAYOUT_TYPES } from '../types'

const INITIAL_STATE = {
    activeComponent: (window.scrollY / (window.innerHeight - 100))
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case LAYOUT_TYPES.SET_ACTIVE:
            return {...state, activeComponent: action.payload };
        default:
            return {...state};
    }
}