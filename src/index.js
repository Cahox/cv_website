//imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
//css
import './index.css';
import './App.scss';
//views
import Layout from './views/Layout';
import Main from './views/Main';
import NoPage from './views/NoPage';
import ElevenTravel from './views/projects/ElevenTravel'
import Strapi from './views/projects/Strapi'
import PocketDuck from './views/projects/PocketDuck'
import Roguelike from './views/projects/Roguelike'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/projects/eleven-travel" element={<ElevenTravel />} />
          <Route path="/projects/strapi" element={<Strapi />} />
          <Route path="/projects/pocket-duck" element={<PocketDuck />} />
          <Route path="/projects/roguelike" element={<Roguelike />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
