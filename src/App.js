import React from 'react';
import TrainerCard from './components/TrainerCard'; 
import MusicBio from './components/MusicBio';

function App() {
  return (
    <main style={{background: "black"}}>
      <h1 style={{textAlign: "center", color: "white"}}>Music App</h1>
      <MusicBio />
    </main>
  );
}



export default App;
