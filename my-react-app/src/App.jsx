import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './Skill';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import State from './hooks/State';
import Form from './hooks/Form';
import Effects from './hooks/Effects';
import Reducer from './hooks/Reducer' 


const App = () => {
  const mySkills = ['java', 'html', 'c#', 'python'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/state' element={<State />} />
        <Route path='/form' element={<Form />} />
        <Route path='/reducer' element={<Reducer/>}/>
      </Routes>

      <div>
        <h1>Welcome to My Portfolio</h1>
        <Skills skill={mySkills} />
      </div>

      <Effects />
    </>
  );
};

export default App;
