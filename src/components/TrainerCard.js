import React, { useState } from 'react';

const TrainerCard = () => {
  const [ listenerName, setListenerName ] = useState('Ryan');
  const [ totalAlbums, setTotalAlbums ] = useState(3)


  const increaseTotalAlbumCount = () => setTotalAlbums(totalAlbums + 1)

  return (
    <div>
      <h2>{listenerName}</h2>
      <h3>Listener Profile</h3>
      <h3>Country: England</h3>
      <h3>Albums Listened: {totalAlbums}</h3>
      <button onClick={increaseTotalAlbumCount}>
        I listened to another one!
      </button>
    </div>
  );
}

export default TrainerCard;
