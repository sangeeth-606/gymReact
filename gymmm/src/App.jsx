import { useState } from 'react';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import './index.css'; 

function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-sm sm:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
