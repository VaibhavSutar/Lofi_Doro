import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { audios } from '../components/music_player/audioData';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {signInWithPopup, signOut} from "firebase/auth";
import { auth, provider} from '../firebase.config/firebase.config';
import SettingsContext from '../components/pomo_comps/SettingsContext';
import Settings from "../components/pomo_comps/Settings"
import Timer from '../components/pomo_comps/Timer';
import Todomain from '../components/todo_comps/todolsmain';
// import '../components/pomo_comps/Timer.css';
import MusicPlayer from '../components/music_player/player';
import videobg from '../assets/video.mp4'
import './HomePg.css'
function HomePage() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const isLoggedIn = localStorage.getItem("isloggedin");
  const userProfilePic = localStorage.getItem("profilepic");
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [val,setval] = useState("");
        // const { email, password } = formFields;
      console.log(localStorage.getItem("isloggedin"));

        // const navigate = useNavigate();
        // const dispatch = useDispatch();
  
        const handleClick = () => {
          if (isLoggedIn) {
            // If the user is logged in, log them out and clear local storage
            signOut(auth)
              .then(() => {
                setval("");
                // setUserProfilePic(null);
                localStorage.removeItem("isloggedin");
                localStorage.removeItem("email");
                localStorage.removeItem("profilepic");
              })
              .catch((error) => {
                console.error("Error signing out:", error);
              });
          } else {
            // If the user is not logged in, initiate the Google login
            signInWithPopup(auth, provider)
              .then((data) => {
                setval(data.user.email);
                localStorage.setItem("email", data.user.email);
                localStorage.setItem("profilepic", data.user.photoURL);
                localStorage.setItem("isloggedin", "true");
              });
          }
        }
          useEffect(()=>{
            setval(localStorage.getItem("email"))
          })
  return (
    <>
    <div className='mainvd'>
        <video src={videobg} autoPlay loop muted/>
    <div className='login'>
    {isLoggedIn ? (
            // If the user is logged in, display the profile image
            <button onClick={handleClick}><img className='profileimg' src={userProfilePic} alt="User Profile" /></button>
          ) : (
            // If the user is not logged in, display the Google login button
            <GoogleButton onClick={handleClick} />
          )}
    </div>
    <div className='todo'>
      <Todomain/>
    </div>
    <div className='pomo'>
      <main>
        <SettingsContext.Provider value={
           {setShowSettings,
            setWorkMinutes,
            setBreakMinutes,
            workMinutes,
            breakMinutes,
          }
        }>
        <Timer/>
        </SettingsContext.Provider>
      </main>
    </div>
    <div className="audiopl">
    {audios.map((audio, index) => (
      <MusicPlayer key={index} audio={audio} />
    ))}
  </div>
    </div>
    </>
  )
}
export default HomePage