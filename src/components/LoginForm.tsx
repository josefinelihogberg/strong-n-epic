import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

interface FormState {
  username: string;
  password: string;
}

type InputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formState, setFormState] = useState<FormState>({
    username: "",
    password: "",
  });

  const { username, password } = formState;

  const handleUsernameChange: InputChangeHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const handlePasswordChange: InputChangeHandler = (e) => {
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
          <label className="form-label">Username:</label>
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
              cursor: "pointer",
              border: "0",
              fontSize: "20px",
              borderRadius: "8px",
              fontWeight: "600",
              margin: "0 10px",
              width: "10em",
              padding: "6px 0",
              color: "white",
              backgroundColor: "#0b090a",
              marginTop: "1.2em",
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
