import React from 'react'
import posed from 'react-pose'
import Icons from '../../assets/icons'
import './styles.css'

const PosedFooter = posed.div({
    invisible: {
        height: 0
    },
    visible: {
        opacity: 1,
        height: '70px',
        transition: {
            duration: 150
        },
    }
})

const PosedButton = posed.div({
    hoverable: true,
    init: {
        background: 'rgba(0,0,0,0)'
    },
    invisible: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 100,
            duration: 150
        }
    },
    hover: {
        background: 'rgba(150,150,255,0.15)'
    }
})

const FooterNav = ({ activeComponent }) => {
    return (
        <PosedFooter pose={activeComponent > 0 ? 'visible' : 'invisible'} className='footer'>
            <PosedButton className='button' onClick={() => window.open('http://linkedin.com/in/davidsonlee')}>
                <img src={Icons.linkedin} className='button-image' alt='linkedin' />
            </PosedButton>
            <PosedButton className='button' onClick={() => window.open('http://github.com/davidson-lee')}>
                <img src={Icons.github} className='button-image' alt='linkedin' />
            </PosedButton>
        </PosedFooter>
    )
}

export default FooterNav