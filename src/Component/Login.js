import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "./Common";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://174.138.21.74:8000/admin/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.email);
        props.history.push("Challenge");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          setError("Someting went wrong. Please try again later.");
        }
      });
    // props.history.push("Challenge");
  };

  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <div>
          <h1>Login</h1>
          <div onSubmit={onsubmit}>
            <div>
              Email :
              <input
                type="email"
                placeholder="Enter your  Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
              Password:
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <br />
              <br />
              {error && <p className="error">{error}</p>}
              <button
                type="button"
                value={loading ? "Loading..." : "Login"}
                disabled={loading}
                onClick={handleLogin}
                className="btn btn-primary"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
