import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import AddPoll from "./AddPoll";
import Polls from "./Polls";
import AuthProvider from "./AuthProvider";
import Header from "./Header";

export default function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        let api = "http://localhost:3000/api/v1/auth";
        let req = await fetch(api, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        if (req.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        throw new Error(err);
      }
    }
    checkAuth();
  });

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/" exact>
          <Polls />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/poll/add"></Route>
        <AuthProvider
          isLoggedIn={isLoggedIn}
          token={localStorage.getItem("token")}
        >
          <AddPoll />
        </AuthProvider>
      </Switch>
    </>
  );
}
