import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { 
  Home,
  About
} from './pages'

const App = () => {
  const location = useLocation()
  console.log( { location } )
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/linkedin' component={() => { 
          var link = document.createElement('a');
          link.href = 'https://www.linkedin.com/in/vishalmathewcherian';
          document.body.appendChild(link);
          link.click();
          return null;
        }}/>
        <Route path='/github' component={() => { 
          var link = document.createElement('a');
          link.href = 'https://www.github.com/vishalcherian';
          document.body.appendChild(link);
          link.click();
          return null;
        }}/>
      </Routes>
    </AnimatePresence>
  )
}

export default App