import React from 'react'
import posed from 'react-pose'
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
        background: 'rgba(132,145,122,0.5)'
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
    hover: {
        background: 'rgba(132,180,122,1)'
    }
})

const PosedResume = posed.div({
    invisible: {
    },
    visible: {
        transition: {
            delay: 2800,
            duration: 500
        },
        staggerChildren: 200
    },
})

const AboutMe = ({ navRef, activeComponent }) => {
    const skills = [
        'HTML',
        'CSS',
        'GITHUB',
        'ES5/ES6',
        'REACT.JS',
        'REDUX.JS',
        'NODE.JS',
        'EXPRESS.JS',
        'REST',
        'REACT-NATIVE',
        'FIREBASE',
        'MONGODB',
        'DJANGO'
    ]
    return (
        <div ref={navRef} className='aboutme'>
            <div className='aboutme-container'>
                <PosedContents pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-contents'>
                    <PosedHeader className='aboutme-description-header'>
                        <h1 className='aboutme-description-title'>
                        Hi, I'm Davidson
                        </h1>
                    </PosedHeader>
                    <div pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-description-container'>
                        {/* <div className='aboutme-photo-container'>
                            <img src={Images.profile} alt='profile' className='aboutme-photo' />
                        </div> */}
                        <div className='aboutme-description-contents'>
                            <PosedTitleLeft className='aboutme-description-subtitle'>
                                I'm a <strong>Full-Stack Developer</strong> 
                                <br />based in <strong>Toronto</strong> specializing in
                                <br /><strong>React</strong> and <strong>Node.js</strong>.
                                <br />
                            </PosedTitleLeft>
                            <PosedSubtitleLeft className='aboutme-description-subtitle'>
                                <strong>Here's What I'm Good at:</strong>
                            </PosedSubtitleLeft>
                            <PosedSkills className='aboutme-description-main'>
                                {skills.map(e => {
                                    return <PosedSkill className='aboutme-skill'>{e}</PosedSkill> 
                                })}
                            </PosedSkills>
                        </div>
                        <PosedResume className='aboutme-contact-contents'>
                            
                        </PosedResume>
                    </div>
                </PosedContents>
            </div>
        </div>
    )
}

export default AboutMe;