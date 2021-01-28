import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div>
            <Link to="/">
              <h1 className="text-base text-indigo-600 font-semibold tracking-wide uppercase text-4xl">
                Polls
              </h1>
            </Link>
          </div>
          <div>
            {props.isLoggedIn ? (
              <AuthenticatedHeader />
            ) : (
              <UnAuthenticatedHeader />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

function AuthenticatedHeader() {
  return (
    <>
      <Link className="ml-4" to="/poll/add">
        Add Polls
      </Link>
      <button className="ml-4">Logout</button>
    </>
  );
}

function UnAuthenticatedHeader() {
  return (
    <>
      <Link className="ml-4" to="/login">
        Login
      </Link>
      <Link className="ml-4" to="/signup">
        Signup
      </Link>
    </>
  );
}
