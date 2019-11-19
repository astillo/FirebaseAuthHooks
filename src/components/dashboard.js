import React, { useState } from "react";
import firebase from "../config/firebase";
import { Container } from "../styles/styled";

const Dashboard = props => {
  const [user, setUser] = useState("");
  async function setUserState() {
    try {
      firebase.getUser().then(res => {
        console.log(res);
      });
    } catch (err) {}
  }

  return (
    <Container>
      {firebase.getUser().then(res => {
        console.log(res);
      })}
    </Container>
  );
};
