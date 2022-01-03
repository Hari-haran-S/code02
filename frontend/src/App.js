import React from 'react';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Header from './components/Header';
import FeatureCategories from './components/FeatureCategories.js';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCategories />
      {/* <h1 className='text-4xl font-bold underline'>Hello world!</h1>; */}
      <Footer />
    </>
  );
}

export default App;
