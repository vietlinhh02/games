import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gameplay from './components/Gameplay';
import Levels from './components/Levels';
import Team from './components/Team';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Playfair Display', 'Cabin', sans-serif;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
    text-shadow: 0 0 2px rgba(255, 0, 0, 0.3);
    letter-spacing: 0.5px;
  }
  
  h1, h2, h3 {
    font-family: 'Playfair Display', 'Cabin', serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0 0 8px rgba(255, 0, 0, 0.5), 0 0 15px rgba(255, 0, 0, 0.3);
  }
  
  h4, h5, h6 {
    font-family: 'Playfair Display', 'Cabin', serif;
    font-weight: 600;
    letter-spacing: 1px;
  }
  
  p, span, a, button, li {
    font-family: 'Playfair Display', 'Cabin', serif;
  }
  
  &::selection {
    background-color: rgba(255, 0, 0, 0.7);
    color: #fff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Gameplay />
      <Levels />
      <Team />
      <Footer />
    </>
  );
}

export default App;
