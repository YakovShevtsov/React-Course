import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [username, setUsername] = useState('');

  const handleUsernameSubmit = () => {
    setUsername(playerName.current.value);
    playerName.current.value = "";
  }
  
  return (
    <section id="player">
      <h2>Welcome, {username.length > 0 ? username : 'unknown entity'}!</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleUsernameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
