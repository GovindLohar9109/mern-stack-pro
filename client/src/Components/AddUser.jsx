import { useState } from "react";
import { addUser } from "./api/user-api";

export default function AddUser() {
  const [user, setUser] = useState({ user_name: "" });

  function inputHandle(e) {
    const { name, value } = e.target;
 
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent form reload
    addUser(user.user_name); // call function on button click
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>User Name</p>
          <input
            type="text"
            value={user.user_name}
            onChange={inputHandle}
            name="user_name"
          />
        </div>
        <div>
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </>
  );
}
