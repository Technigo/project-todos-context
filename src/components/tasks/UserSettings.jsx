import { useUserStore } from "../../stores/useUserStore";
import { useState } from "react";

export const UserSettings = () => {
  const {toggleLogIn, userName, setUserName, isLoggedIn } = useUserStore()
  const [inputValue, setInputValue] = useState("");

  const handleSubmitName = () => {
    setUserName(inputValue); 
    setInputValue(""); 
  };

  return(
    <div>
    <h2>User Settings</h2>  
    <p>Status: {isLoggedIn ? "online" : "offline"}</p>
    <button onClick={toggleLogIn}>Log in/Log out</button>
    <label>
        <input 
        type="text" 
        id="name"
        placeholder="username:"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        >
        </input>
        <button onClick={handleSubmitName}>Submit</button>
      </label>
    </div>
  )
}