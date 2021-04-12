import React from 'react';
import ListenerCards from './components/ListenerCards';
import TrainerCard from './components/TrainerCard'; 
import MusicArtists from './components/MusicArtists'; 

function App() {
  return (
    <main>
      <h1>Personal Album list</h1>
      <TrainerCard />
      <MusicArtists />
    </main>
  );
}



export default App;
