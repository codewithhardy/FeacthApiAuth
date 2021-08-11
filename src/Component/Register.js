import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [admin_type, setAdmin] = useState("");

  async function signUp() {
    let items = { email, first_name, last_name, password, admin_type };
    console.warn(items);

    let result = await fetch(
      "http://174.138.21.74:8000/admin/auth/create_account",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      }
    );
    result = await result.JSON();
    console.warn("result", result);
  }
  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h1>User Registeration</h1>
        <input
          type="email"
          title="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="firstName"
          title="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          title="LastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          title="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="text"
          placeholder="Admin"
          title="Admin"
          value={admin_type}
          onChange={(e) => setAdmin(e.target.value)}
          className="form-control"
        />
        <br />

        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Register;
