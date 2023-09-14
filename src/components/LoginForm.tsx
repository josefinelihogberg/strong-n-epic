import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the interface for the login form props
interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

interface FormState {
  username: string;
  password: string;
}
const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="container">
      <h2 className="mt-5">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-3">
          <button
            style={{
              cursor: "pointer", // Added double quotes
              border: "0",
              fontSize: "20px",
              borderRadius: "8px",
              fontWeight: "600",
              margin: "0 10px", // Added double quotes
              width: "10em", // Added double quotes
              padding: "8px 0", // Added double quotes
              boxShadow: "0 0 10px rgba(104, 85, 224, 0.2)",
              color: "white",
              backgroundColor: "#0b090a",
              marginTop: "2em",
            }}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
