import { LAYOUT_TYPES } from '../types'

const INITIAL_STATE = {
    activeComponent: (window.scrollY / (window.innerHeight - 100)),
    footerVisible: false
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case LAYOUT_TYPES.SET_ACTIVE:
            return {...state, activeComponent: action.payload };
        case LAYOUT_TYPES.SET_FOOTER:
            return {...state, footerVisible: action.payload}
        default:
            return {...state};
    }
}