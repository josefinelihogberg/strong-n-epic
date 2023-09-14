import React, { useState, FormEvent, ChangeEvent } from "react";

// Define the interface for the register form props
interface RegisterFormProps {
  onRegister: (username: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
