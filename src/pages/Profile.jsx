import { useState } from "react";

const Profile = () => {
  const [c, setC] = useState(0);
  const inc = () => {
    setC(c + 1);
    console.log(c);
  };
  const dec = () => {
    setC(c - 1);
    console.log(c);
  };
  return (
    <div>
      <h1>Profile Page !!!</h1>
      <button onClick={dec}>-</button>
      <p>{c}</p>
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Profile;
