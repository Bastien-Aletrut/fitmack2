import React from 'react';

import { Footer, Blog, Possibility, Features, Header } from './containers';
import {Article, CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Article />
    <Brand />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;