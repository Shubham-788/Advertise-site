import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../style/login.css";

const BusReg = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    businessName: "",
    description: "",
    targetAgeRange: "",
    targetHobby: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6005/register-business",
        formData
      );
      // console.log(response.data);
      setFormData({
        businessName: "",
        description: "",
        targetAgeRange: "",
        targetHobby: "",
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
        <h1 style={{ textAlign: "center" }}>Business Registration</h1>
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              className="text-area"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <input
              type="text"
              name="targetAgeRange"
              placeholder="Target Age(enter age)"
              value={formData.targetAgeRange}
              onChange={handleChange}
            />
            <div className="hobby-selection">
              <label>Select Target Hobby:</label>
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="targetSport"
                  name="targetHobby"
                  value="sport"
                  checked={formData.targetHobby === "sport"}
                  onChange={handleChange}
                />
                <label htmlFor="targetSport">Sport</label>

                <input
                  type="radio"
                  id="targetMusic"
                  name="targetHobby"
                  value="music"
                  checked={formData.targetHobby === "music"}
                  onChange={handleChange}
                />
                <label htmlFor="targetMusic">Music</label>

                <input
                  type="radio"
                  id="targetFood"
                  name="targetHobby"
                  value="food"
                  checked={formData.targetHobby === "food"}
                  onChange={handleChange}
                />
                <label htmlFor="targetFood">Food</label>

                <input
                  type="radio"
                  id="targetTravelling"
                  name="targetHobby"
                  value="travelling"
                  checked={formData.targetHobby === "travelling"}
                  onChange={handleChange}
                />
                <label htmlFor="targetTravelling">Travelling</label>
              </div>
            </div>
            <button type="submit">Register Business</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BusReg;