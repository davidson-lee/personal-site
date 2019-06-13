import React, {useEffect, useState} from 'react'
import posed from 'react-pose'

import Icons from '../../assets/icons'

import {connect} from 'react-redux'
import './styles.css'

const PosedContents = posed.div({})

const PosedHeader = posed.div({
    invisible: {
        opacity: 0,
        transition: {
            delay: 300,
            duration: 300
        }
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 100,
            duration: 700
        }
    }
})

const PosedTitleLeft = posed.div({
    invisible: {
        x: '-50%',
        opacity: 0,
        transition: {
            duration: 300
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1000,
            duration: 700
        }
    }
})

const PosedSubtitleLeft = posed.div({
    invisible: {
        x: '-50%',
        opacity: 0,
        transition: {
            duration: 300
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 2000,
            duration: 700
        }
    }
})

const PosedSkills = posed.div({
    invisible: {
    },
    visible: {
        transition: {
            delay: 3000,
            duration: 500
        },
        staggerChildren: 50
    },
})

const PosedSkill = posed.div({
    hoverable: true,
    init: {
        background: 'rgba(255,244,45,0.4)'
    },
    invisible: {
        y:'-100%',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 3000,
            duration: 500
        }
    },
    active: {
        scale: 1.1,
        background: 'rgba(255,244,45,1)'
    },
    inactive: {
        scale: 1,
        background: 'rgba(255,244,45,0.4)'
    },
    hover: {
        background: 'rgba(255,244,45,1)'
    }
})

const PosedResume = posed.div({
    invisible: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 3000,
            duration: 500
        },
        staggerChildren: 200
    },
})

const PosedFooter = posed.div({
    visible: {
        y: 0,
        transition: {
            type: 'tween',
            duration: 300
        }
    },
    invisible: {
        y: '100%',
        transition: {
            type: 'tween',
            duration: 300
        }
    }
})

const PosedFooterText = posed.div({
    hoverable: true,
    init: {
        x: 0,
    },
    hover: {
        x: '10px',
    }
})

const PosedFooterIcon = posed.img({
    inactive: {
        rotate: '90deg'
    },
    active: {
        rotate: '270deg'
    }
})

const PosedButton = posed.img({
    hoverable: true,
    init: {
        scale: 1
    },
    inactive: {
        x: '-300%',
        opacity: 0,
        transition: {
            duration: 200
        }
    },
    active: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 200
        }
    },
    hover: {
        scale: 1.1
    },
})

const PosedHand = posed.img({
    idle: {
        rotate: '-20deg'
    },
    rotated: {
        rotate: '20deg'
    }
})

const PosedSkillIcon = posed.img({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1
    },
    hover: {
        scale: 1.1
    },
    onEnter: {
        opacity: 0,
        scale: 0.3
    },
    enter: {
        opacity: 1,
        scale: 1
    },
    press: {
        scale: 1.05
    }
})

const AboutMe = ({ navRef, activeComponent }) => {
    const [repeatState, setRepeatState] = useState(true)
    const [activeSkill, setActiveSkill] = useState('html5')
    const [footer, setFooter] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            console.log(repeatState)
            setRepeatState(!repeatState)
        }, 1000)
    })
    useEffect(() => {
        Object.keys(Icons).map(key => {
            const img = new Image();
            img.src = Icons[key].fileName;
        })
    }, [])
    const skills = [
        'html5',
        'css3',
        'github',
        'es6',
        'python',
        'react',
        'redux',
        'node',
        'express',
        'firebase',
        'mongodb',
        'django'
    ]
    return (
        <div ref={navRef} style={{height: window.innerWidth > 810 ? '100vh' : window.innerHeight-80, marginBottom: window.innerWidth > 810 ? 0 : '80px'}} className='aboutme'>
                <PosedContents pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-contents'>
                    <PosedHeader className='aboutme-description-header'>
                        <h1 className='aboutme-description-title'>
                        Hi, I'm Davidson!
                        </h1>
                        {window.innerWidth > 810 ?
                            <PosedHand pose={repeatState ? 'idle' : 'rotated'} src={Icons.hand} className='aboutme-hand' alt='hand' />
                            : null
                        }
                    </PosedHeader>
                    <div pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-description-container'>
                        <div className='aboutme-description-contents'>
                            <PosedTitleLeft className='aboutme-description-subtitle'>
                                I'm a <strong style={{color: 'rgb(180,50,180)'}}>Full-Stack Developer</strong> 
                                <br />based in <strong style={{color: 'rgb(230,60,60)'}}>Toronto</strong> specializing in
                                <br /><strong style={{color: 'rgb(60,60,230)'}}>React</strong> and <strong style={{color: 'rgb(60,150,60)'}}>Node.js</strong>.
                                <br />
                            </PosedTitleLeft>
                            <PosedSubtitleLeft className='aboutme-description-subtitle'>
                                <strong>Here's What I'm Good at:</strong>
                            </PosedSubtitleLeft>
                            <PosedSkills className='aboutme-description-main'>
                                {skills.map(e => {
                                    return <PosedSkill key={e} pose={activeSkill === e ? 'active' : 'inactive'} className='aboutme-skill' onClick={() => setActiveSkill(e)}>{e.toUpperCase()}</PosedSkill> 
                                })}
                            </PosedSkills>
                        </div>
                        <PosedResume className='aboutme-contact-contents'>
                            {skills.map(e => 
                                activeSkill === e
                                    ? <PosedSkillIcon initialPose='onEnter' pose='enter' src={Icons[activeSkill]} alt='icon' className='skill-icon' />
                                    : null
                            )}
                        </PosedResume>
                    </div>
                </PosedContents>
                <PosedFooter pose={[activeComponent > 0 ? 'visible' : 'invisible', footer ? 'active' : 'inactive']} onClick={()=> setFooter(!footer)} className='toggle-footer'>
                    <PosedFooterText style={{display: 'flex', alignItems: 'center'}}>
                        <h3>Get In Touch!</h3>
                        <PosedFooterIcon src={Icons.footer} className='footer-icon' alt='footer' />
                    </PosedFooterText>
                    <div className='button' onClick={() => window.open('http://linkedin.com/in/davidsonlee')}>
                        <PosedButton src={Icons.linkedin} className='button-image' alt='linkedin' />
                    </div>
                    <div className='button' onClick={() => window.open('http://linkedin.com/in/davidsonlee')}>
                        <PosedButton src={Icons.githubSmall} className='button-image' alt='linkedin' />
                    </div>
                </PosedFooter>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activeComponent: state.layout.activeComponent,
    }
}

export default connect(mapStateToProps)(AboutMe);