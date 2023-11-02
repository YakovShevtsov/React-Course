import { useState } from "react";

export default function Player() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState(false);

  const handleUsernameChange = (event) => {
    setSubmittedUsername(false);
    setUsername(event.target.value);
  }

  const handleUsernameSubmit = () => {
    setSubmittedUsername(true);
  }
  
  return (
    <section id="player">
      <h2>Welcome, {submittedUsername ? username : 'unknown entity'}!</h2>
      <p>
        <input type="text" onChange={handleUsernameChange} value={username} />
        <button onClick={handleUsernameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
