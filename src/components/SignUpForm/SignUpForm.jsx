import { Component } from "react";
import { signUp } from "../../utilities/users-service"
import "./SignUpForm.css";

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="sign-up-form">
            <label>
              <h2>Name</h2>
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>
              <h2>Email</h2>
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>
              <h2>Password</h2>
            </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>
              <h2>Confirm your Password</h2>
            </label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <br />
            <br />
            <button type="submit" disabled={disable} className="sign-in-button">
              SIGN UP
            </button>
          </div>
        </form>
        <br />
        <button
          type="button"
          className="sign-in-button"
          onClick={this.props.toggleForms}
        >
          Back to Sign In
        </button>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}
