import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./styles/App.css";

import Home from './pages/Home';

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;