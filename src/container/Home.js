import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/home";

const HomeContainer = (props) => {
  const navigate = useNavigate();
  const setprops = { ...props, navigate };
  return <Home {...setprops} />;
};

export default HomeContainer;
