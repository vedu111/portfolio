import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'

const App = () => {
  return (
    <>
        <Header/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
    </>
  )
}
export default App

