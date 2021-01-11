import React from "react";
import { Redirect } from "react-router-dom";

export default function AuthProvider(props) {
  if (!props.token) {
    return <Redirect to="/login" />;
  } else if (!props.isLoggedIn) {
    return <div className="loader">Loading...</div>;
  } else {
    return props.children;
  }
}
