import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState("");

  const handleUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const updateUsername = () => {
    props.setUsername(newUsername);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Update Username"
        onChange={handleUsername}
      />
      <button onClick={updateUsername}>Update Username</button>
    </div>
  );
};
