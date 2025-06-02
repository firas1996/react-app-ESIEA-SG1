import React, { useState } from "react";
import Btn from "../components/Btn";
import axios from "axios";

const Contact = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("http://10.33.2.58:1122/users")
      .then((res) => {
        setUsers(res.data.data.users);
        console.log(res.data.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>Contact Page !!!</h1>
      <button onClick={getUsers}>Get Users</button>
      <Btn />
    </div>
  );
};

export default Contact;
