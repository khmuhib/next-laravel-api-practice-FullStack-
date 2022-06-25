import React from "react";
import { useState } from "react";
import { Nav } from "../../components/Nav";

export default function Users() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState("");
  
  const loadAllData = () => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  };

  const handleAddUser = () => {
    fetch("api/users", {
      method: "POST",
      body: JSON.stringify({user}),
      headers: {"Content-Type": "application/json"},
    });
    loadAllData();
  };

  const deleteUser = (id) => {
    fetch(`/api/users/${id}`, {
      method: "DELETE",
    })
    loadAllData();

  }

  return (
    <div>
      <Nav></Nav>
      <h1>All Users</h1>
      <div>
        <input type="text" onChange={(e) => setuser(e.target.value)} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <button onClick={loadAllData}>Load Users</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>
              {user.id}: {user.name}
            </h2>
            
            <button onClick={()=>deleteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
