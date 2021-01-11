import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      {props.isLoggedIn ? <AuthenticatedHeader /> : <UnAuthenticatedHeader />}
    </>
  );
}

function AuthenticatedHeader() {
  return (
    <>
      <header>
        <nav>
          <Link to="/poll/add">Add Polls</Link>
        </nav>
        <button>Logout</button>
      </header>
    </>
  );
}

function UnAuthenticatedHeader() {
  return (
    <>
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </header>
    </>
  );
}
