import { LAYOUT_TYPES } from '../types'

export const handleScroll = (scrollPosition) => dispatch => {
    switch (scrollPosition) {
        case (scrollPosition > document.documentElement.clientHeight):
            dispatch({
                type: LAYOUT_TYPES.SET_HEADER,
                payload: true
            })
            break;
        default:
            dispatch({
                type: LAYOUT_TYPES.SET_HEADER,
                payload: false
            })
            break;
    }
}