import { LAYOUT_TYPES } from '../types'

export const handleScroll = (activeComponent) => dispatch => {
    dispatch({
        type: LAYOUT_TYPES.SET_ACTIVE,
        payload: activeComponent
    })
}