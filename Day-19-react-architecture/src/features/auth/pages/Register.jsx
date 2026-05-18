import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Register</button>
          <p>
            Already have an Account ?
            <Link to="/login" className="toggleAuthForm">
              login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
