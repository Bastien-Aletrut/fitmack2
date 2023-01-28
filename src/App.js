import React from 'react';

import { Footer, Blog, Possibility, Features, Header } from './containers';
import {Article, CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <h1>web app</h1>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;