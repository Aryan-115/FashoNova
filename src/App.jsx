import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ChooseStyle from './components/ChooseStyle'
import StyleCategories from './components/StyleCategories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import TrendingNow from './components/pages/TrendingNow'
import WorkEssentials from './components/pages/WorkEssentials'
import WeekendVibes from './components/pages/WeekendVibes'
import SpecialOccasions from './components/pages/SpecialOccasions'
import Contact from './components/pages/Contact'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ChooseStyle />
            <StyleCategories />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/trending" element={<TrendingNow />} />
        <Route path="/category/work" element={<WorkEssentials />} />
        <Route path="/category/weekend" element={<WeekendVibes />} />
        <Route path="/category/special" element={<SpecialOccasions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App