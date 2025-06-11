import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Achievements from './components/achievements/Achievements'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About/>
        <Experience/>
        <Achievements/>
        <Myprojects/>
        <Contacts/>
    </>
  )
}
export default App