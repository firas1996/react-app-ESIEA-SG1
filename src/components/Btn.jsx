import React from "react";
import { useNavigate } from "react-router-dom";

const Btn = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  };
  return <button onClick={goToProfile}>Go To Profile !</button>;
};

export default Btn;
