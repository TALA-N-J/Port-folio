import { useState } from 'react'
import Header from './Composent/header'
import Accueil from './Composent/accueil'
import About from './Composent/about'
import Facts from './Composent/facts.jsx'
import Skills from './Composent/skills.jsx'
import Resumer from './Composent/resumer.jsx'
import Portfolio from './Composent/portefolio.jsx'
import Service from './Composent/service.jsx'
import Contact from './Composent/contact.jsx'

function App() {
  const [isActive,setIsActive] = useState(false);

  const handelClick = ()=>{
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={`${isActive?'mobile-nav-active':''}`}>
        <i className={`bi  mobile-nav-toggle d-xl-none ${isActive?'bi-x':'bi-list'}`} onClick={handelClick}></i>
        <Header></Header>
        <Accueil></Accueil>
        <main id="main">
          <About></About>
          <Facts></Facts>
          <Skills></Skills>
          <Resumer></Resumer>
          <Portfolio></Portfolio>
          <Service></Service>
          <Contact></Contact>
        </main>
      </div>
    </>
  )
}

export default App
