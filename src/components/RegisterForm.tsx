import React, { useState, FormEvent, ChangeEvent } from "react";

interface RegisterFormProps {
  onRegister: (username: string, password: string) => void;
}

type InputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange: InputChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange: InputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(username, password);
  };

  return (
    <div className="container">
      <h2 className="mt-5">Register</h2>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
