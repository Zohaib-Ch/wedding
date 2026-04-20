import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashIntro from './components/SplashIntro';
import HomePage from './components/HomePage';
import EventView from './components/EventView';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashIntro onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/invite" element={<EventView type="3-day" />} />
            <Route path="/invitation" element={<EventView type="2-day" />} />
            <Route path="/friends" element={<EventView type="walima-only" />} />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
