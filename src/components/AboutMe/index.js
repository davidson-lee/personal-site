import React from 'react'
import Images from '../../assets/images'
import posed from 'react-pose'
import './styles.css'

const PosedHeader = posed.div({
    invisible: {
        x: '-50%',
        opacity: 0,
        transition: {
            delay: 100,
            duration: 300
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 700
        }
    }
})

const PosedContent = posed.div({
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
            delay: 100,
            duration: 700
        }
    }
})

const AboutMe = ({ navRef, activeComponent }) => {
    return (
        <div ref={navRef} className='aboutme'>
            <div className='aboutme-container'>
                <div className='aboutme-contents'>
                    <PosedHeader pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-description-header'>
                        <h1 className='aboutme-description-title'>
                            Profile
                        </h1>
                    </PosedHeader>
                    <PosedContent pose={activeComponent > 0 ? 'visible' : 'invisible'} className='aboutme-description-container'>
                        <div className='aboutme-photo-container'>
                            <img src={Images.profile} alt='profile' className='aboutme-photo' />
                        </div>
                        <div className='aboutme-description-contents'>
                            <h2 className='aboutme-description-subtitle'>
                                <strong>Full-Stack Developer</strong> based in <strong>
                                <br />Toronto</strong> specializing in
                                <br /><strong>React</strong> and <strong>Node.js</strong>.
                            </h2>
                            <h3 className='aboutme-description-main'>
                                The feeling of successfully devising a simple, elegant solution to a complex problem got me hooked on web development. I am always looking to learn and collaborate so feel free to reach out and connect!
                            </h3>
                        </div>
                    </PosedContent>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;