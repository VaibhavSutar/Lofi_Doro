import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pause from "../../assets/pause-solid.svg"
import play from "../../assets/play-solid.svg"
import "./player.css"


const MusicPlayer = ({ audio }) => {
  const p = require("../../assets/pause-solid.svg")
  const pl = require("../../assets/play-solid.svg")
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='main'>
      <h2>{audio.name}</h2>
      <audio ref={audioRef} src={audio.music} />
      {/* {<button onClick={togglePlay}>
      <FontAwesomeIcon icon={isPlaying ? p: pl} />
      </button>} */}
     <button onClick={togglePlay} className={isPlaying?"fa-solid fa-pause fa-beat fa-2xl" : "fa-solid fa-play fa-2xl"} style={{color: "#ffff"}}></button>
      {/* <button onClick={togglePlay}><FontAwesomeIcon icon="fa-solid fa-play" beat size="xl" /></button> */}
    </div>
  );
};

export default MusicPlayer;