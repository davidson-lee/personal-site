import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import posed from 'react-pose'
import Icons from '../../assets/icons'
import Backgrounds from '../../assets/backgrounds'
import './styles.css'

const PosedLabel = posed.div({
    init: {
        x: '-100%',
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1000
        }
    }
})

const PosedName = posed.h1({
    init: {
        x: '-25%',
        opacity: 0,
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1000,
            duration: 1000
        }
    }
})

const PosedTitle = posed.h2({
    init: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            delay: 2000,
            duration: 750
        }
    }
})

const PosedBottomNav = posed.div({
    invisible: {
        y:'100%',
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 2500,
            duration: 500
        }
    },
})

const PosedNavIcon = posed.img({
    hoverable: true,
    init: {
        y: 0
    },
    hover: {
        y: '8%'
    },
})

const HeroLanding = ({ componentRefs, scrollToRef }) => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY)
    useEffect(() => {
        window.addEventListener('scroll', 
          _.throttle(() => {
              setScrollPosition(window.scrollY)
          }, 1),
          {passive:true}
        )
        return window.removeEventListener('scroll', 
        _.throttle(() => {
            setScrollPosition(window.scrollY)
        }, 1),
        {passive:true}
      )
      }, [])
    console.log( + 'rerender')
    return (
        <div ref={componentRefs[0].ref} className='hero-container' style={{height: window.innerWidth < 810 ? window.innerHeight : '100vh'}}>
            <video style={{paddingBottom: `${window.innerWidth < 810 ? scrollPosition / 10 : scrollPosition / 70}%`}} id='background-video' loop autoPlay muted>
                <source src={Backgrounds.hero} type='video/mp4' />
            </video> 
            <PosedLabel initialPose='init' pose='enter' className='hero-label'>
                <PosedName className='hero-name'>Davidson Lee</PosedName>
                <PosedTitle className='hero-title'>Full-Stack Developer</PosedTitle>
            </PosedLabel>
            <PosedBottomNav 
                className='hero-bottom-bar' 
                onClick={() => scrollToRef(componentRefs[1].ref)}
                initialPose='invisible'
                pose='enter'
                >
                <PosedNavIcon 
                    className='hero-nav-icon' 
                    src={Icons.chevronDown}
                    alt='down'
                />
            </PosedBottomNav> 
        </div>
    )
}

export default HeroLanding;