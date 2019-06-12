import React from 'react'
import posed from 'react-pose'
import Icons from '../../assets/icons'
import './styles.css'

const PosedNav = posed.div({
    invisible: {
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 150
        }
    },
})

const PosedNavIcon = posed.img({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.1)'
    },
    visible: {
        opacity: 1
    },
    invisible: {
        opacity: 0
    },
    hover: {
        scale: 1.05,
        boxShadow: '0px 0px 5px rgba(0,0,0,0.5)'
    },
    press: {
        scale: 1
    }
})

const SideNav = ({ componentRefs, scrollToRef, activeComponent }) => {
    return (
        <PosedNav pose={activeComponent > 0 ? 'visible' : 'invisible'} className='sidenav-container'>
            <PosedNavIcon 
                className='sidenav-icon' 
                src={Icons.chevronUp} 
                alt='up'
                onClick={() => {
                    if (activeComponent > 0) scrollToRef(componentRefs[activeComponent - 1].ref)
                }}
            />
        </PosedNav>
    )
}

export default SideNav;