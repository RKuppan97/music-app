import React, { useState } from 'react';

const MusicBio = () => {
    const [songs, setSongs] = useState([
        { name: "Of Schlagenhaim ", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Black_Midi_-_Schlagenheim.png/220px-Black_Midi_-_Schlagenheim.png"},
        { name: "Performance ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Black_Midi_2019_Festival_Sideways%2C_Helsinki_%2848045809667%29.jpg/279px-Black_Midi_2019_Festival_Sideways%2C_Helsinki_%2848045809667%29.jpg"},
        { name: "Drummer ", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Black_Midi_%2848128806197%29.jpg/170px-2019_Black_Midi_%2848128806197%29.jpg"}
    ])


    const renderRows = () => {
        return songs.map(p => <tr><td>{p.name}<img style={{height: "250px", width: "350px"}} src={p.img} /></td></tr>) }


    return (
        <table style={{ border: "0px solid black", width: "70vw", textAlign: "center" }}>
            <thead style={{color:"white"}}>
                <h1>Black Midi</h1>
                <h2>Experimental Rock | Noise Rock | Post Rock | Math Rock</h2>
                <p>Black Midi (stylised in all lowercase) are an English rock band from London, formed in 2017. The band consists of Geordie Greep (vocals, guitar), Matt Kwasniewski-Kelvin (vocals, guitar), Cameron Picton (vocals, bass guitar, synths) and Morgan Simpson (drums). Their name is derived from the Japanese music genre black MIDI. Their sound has been described as experimental rock, math rock, noise rock and post-punk.</p>
            </thead>   
            <tbody style={{color:"white", display:"flex", justifyContent: "rows"}}>
                { renderRows() }
            </tbody> 
        </table>
    );
};

export default MusicBio;