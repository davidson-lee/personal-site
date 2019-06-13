import { LAYOUT_TYPES } from '../types'

export const handleScroll = (activeComponent) => dispatch => {
    dispatch({
        type: LAYOUT_TYPES.SET_ACTIVE,
        payload: activeComponent
    })
}

export const handleFooter = (footerVisible) => dispatch => {
    dispatch({
        type: LAYOUT_TYPES.SET_FOOTER,
        payload: footerVisible
    })
}