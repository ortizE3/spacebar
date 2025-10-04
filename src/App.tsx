import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About/About'
import Work from './pages/Work/Work'

import BlueBonnetBarrel from './pages/Projects/BlueBonnetBarrel/BlueBonnetBarrel'
import DgkBubbleUp from './pages/Projects/DgkBubbleUp/DgkBubbleUp'

import './App.scss'
import DgkMadeSurvive from './pages/Projects/DgkMadeSurvive/DgkMadeSurvive'
import GravCannabisSpirit from './pages/Projects/GravCannabisSpirit/GravCannabisSpirit'
import LrgFindYourHigherSelf from './pages/Projects/LrgFindYourHigherSelf/LrgFindYourHigherSelf'
import GravPleasuresBreatheAgain from './pages/Projects/GravPleasuresBreatheAgain/GravPleasuresBreatheAgain'
import GravRitualQuadrant from './pages/Projects/GravRitualQuadrant/GravRitualQuadrant'
import Juneteenth from './pages/Projects/Juneteenth/Juneteenth'
import BuffaloBoxing from './pages/Projects/BuffaloBoxing/BuffaloBoxing'
import WhambamCoffee from './pages/Projects/WhambamCoffee/WhambamCoffee'
import ModBikes from './pages/Projects/ModBikes/ModBikes'
import { useLayoutEffect } from 'react'

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/blue-bonnet-barrel" element={<BlueBonnetBarrel />} />
        <Route path="/projects/dgk-bubble-up" element={<DgkBubbleUp />} />
        <Route path="/projects/dgk-made-2-survive" element={<DgkMadeSurvive />} />
        <Route path="/projects/grav-cannabis-spirit" element={<GravCannabisSpirit />} />
        <Route path="/projects/lrg-find-your-self" element={<LrgFindYourHigherSelf />} />
        <Route path="/projects/grav-breathe-again" element={<GravPleasuresBreatheAgain />} />
        <Route path="/projects/grav-ritual-quadrant" element={<GravRitualQuadrant />} />
        <Route path="/projects/juneteenth" element={<Juneteenth />} />
        <Route path="/projects/buffalo-boxing" element={<BuffaloBoxing />} />
        <Route path="/projects/whambam-coffee" element={<WhambamCoffee />} />
        <Route path="/projects/mod-bikes" element={<ModBikes />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
