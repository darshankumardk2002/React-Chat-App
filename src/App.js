import React, { useState, useRef } from "react";
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import "./App.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config.js";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    room(null);
  };
  
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
        ) : (
        <div className="room">
          <label className="lab"> Type room name </label>
          <input ref={roomInputRef} />
          <button
            onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>

      </div>
    </>
  );
}

export default App;
