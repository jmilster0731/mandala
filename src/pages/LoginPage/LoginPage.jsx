import SignUpForm from "../../components/SignUpForm/SignUpForm";
import * as usersService from "../../utilities/users-service"
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("");
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const user = await usersService.login(credentials);
      props.setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  const toggleForms = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <main>
      <div className="login-container">
        <div className="Login-Backsplash">
          <div className="mandala">
            <img
              src="https://i.imgur.com/gJ30nqM.png"
              alt=""
              className="mandala-bg"
            />
          </div>
          <div className="login-form-container">
            <h1>Enter the World of Mandala</h1>
            <br />
            <br />
            {showSignUpForm ? (
              <SignUpForm toggleForms={toggleForms} setUser={props.setUser} />
            ) : (
              <form onSubmit={handleLoginSubmit}>
                <div className="sign-in-form">
                  <label>
                    <h2>Email</h2>
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="email"
                    value={credentials.email}
                  />
                  <br />
                  <br />
                  <label>
                    <h2>Password</h2>
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={credentials.password}
                  />
                  <br />
                  <br />
                  <button type="submit" className="sign-in-button">
                    Sign In
                  </button>
                  <br />
                  <button
                    type="button"
                    className="sign-in-button"
                    onClick={toggleForms}
                  >
                    {showSignUpForm ? "Back to Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
