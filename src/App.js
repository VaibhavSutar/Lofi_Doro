import { useEffect } from 'react';
import './App.css';
import HomePage from './routes/HomePage';
import MusicPlayer from './components/music_player/player';
import { audios } from './components/music_player/audioData';
import Todomain from './components/todo_comps/todolsmain';
function App() {
  return (
    <div className="App">
     <HomePage/>
     {/* <Todomain/> */}
     {/* <MusicPlayer/> */}
     
    </div>
    
  );
}

export default App;