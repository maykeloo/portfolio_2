import './App.css';
import Contact from './components/Contact/Contact';
import { Sections } from './components/appElements';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import React,{useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [isActive, setActive] = useState(false);
  const setActiveHandler = () => setActive(!isActive);

  return (
    <>
      <Header isActive = {isActive} setActiveHandler = {setActiveHandler}/>
      <Sidebar isActive = {isActive} setActiveHandler = {setActiveHandler}/>
      <Sections>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </Sections>
    </>
  );
}

export default App;
