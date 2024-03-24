import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

const UserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    hobby: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6005/register-user",
        formData
      );
      console.log(response.data);
      setFormData({
        username: "",
        email: "",
        password: "",
        age: "",
        hobby: "",
      });
      navigate("/login"); // Redirect to '/login' after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>User Registration</h1>
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
            <div className="hobby-selection">
              <label>Select Hobby:</label>
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="sport"
                  name="hobby"
                  value="sport"
                  checked={formData.hobby === "sport"}
                  onChange={handleChange}
                />
                <label htmlFor="sport">Sport</label>

                <input
                  type="radio"
                  id="music"
                  name="hobby"
                  value="music"
                  checked={formData.hobby === "music"}
                  onChange={handleChange}
                />
                <label htmlFor="music">Music</label>

                <input
                  type="radio"
                  id="food"
                  name="hobby"
                  value="food"
                  checked={formData.hobby === "food"}
                  onChange={handleChange}
                />
                <label htmlFor="food">Food</label>

                <input
                  type="radio"
                  id="travelling"
                  name="hobby"
                  value="travelling"
                  checked={formData.hobby === "travelling"}
                  onChange={handleChange}
                />
                <label htmlFor="travelling">Travelling</label>
              </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;