import React, { useRef, useEffect } from 'react';
import _ from 'lodash'
import HeroLanding from './components/HeroLanding'
import SideNav from './components/SideNav'
import AboutMe from './components/AboutMe'

import { connect } from 'react-redux'
import { handleScroll } from './store/actions/layoutActions'

import './App.css'

const App = ({activeComponent, handleScroll}) => {
  const scrollToRef = (ref) => ref.current && window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
  const componentRefs = [
    { title: 'landing', ref: useRef(null) },
    { title: 'aboutMe', ref: useRef(null) },
  ]

  useEffect(() => {
    window.addEventListener('scroll', 
      _.throttle(() => {
        if (window.scrollY < window.innerHeight * (window.innerWidth < 810 ? 0.5 : 0.25)) {
          if (activeComponent !== 0) {
            handleScroll(0)
          }
        } else if (window.scrollY >= (window.innerWidth < 810 ? 0.5 : 0.25) && window.scrollY < window.innerHeight * 1.7) {
          if (activeComponent !== 1) {
            handleScroll(1)
          }
        }
      }, 70),
      {passive:true}
    )
  }, [handleScroll, activeComponent])

  return (
      <div className="App">
        <HeroLanding componentRefs={componentRefs} scrollToRef={scrollToRef}/>
        <AboutMe navRef={componentRefs[1].ref}/>
        {window.innerWidth > 810 
          ? <SideNav componentRefs={componentRefs} scrollToRef={scrollToRef} activeComponent={activeComponent}/>
          : null
        }
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeComponent: state.layout.activeComponent,
  }
}

export default connect(mapStateToProps, { handleScroll, })(App);