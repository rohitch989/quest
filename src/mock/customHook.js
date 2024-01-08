import axios from "axios";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { API_endpoint } from "./Data";

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  }, [value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const sendRequest = async ({ method, url, body = null }) => {
  const URL = API_endpoint + url;
  const headers = {
    "Content-Type": "application/json",
  };
  //post call
  if (body) {
    return await axios[method](URL, body, headers)
      .then((response) => {
        return response;
      })
      .catch((e) => e);
  }
  //any call
  return await axios[method](URL, headers)
    .then((response) => {
      return response;
    })
    .catch((e) => e);
};
