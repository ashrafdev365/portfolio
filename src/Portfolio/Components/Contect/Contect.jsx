import React, { useState, useEffect } from "react";
import "./contect.css";
import Nav from "../Navbar/Nav";
import Footer from "../Navbar/Footer";

const Contect = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    option: "",
    message: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, email, option, message } = user;

    if (name && email && option && message) {
      const res = await fetch(
        "https://rafiahsan-cd071-default-rtdb.firebaseio.com/rafiContact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            option,
            message,
          }),
        }
      );
      if (res) {
        setuser({
          name: "",
          email: "",
          option: "",
          message: "",
        });
        alert("Data Send");
      }
    } else {
      alert("Plzz Fill all the Data");
    }
  };
  return (
    <>
      <Nav navSo="otherNav" navCo="otherAboutnav" />

      <section className="contect_section">
        <h1>Contect us</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="name"
            onChange={getUserData}
            value={user.name}
            placeholder="Name..."
            required
            name="name"
          />
          <input
            type="email"
            onChange={getUserData}
            value={user.email}
            placeholder="Email..."
            required
            name="email"
          />

          <select
            name="type"
            id="type"
            onChange={getUserData}
            value={user.option}
            name="option"
          >
            <option value="Choose A Option">Choose A Option</option>
            <option value="Freelance">Freelance</option>
            <option value="Project Hire">Project Hire</option>
            <option value="Job Hire">Job Hire</option>
          </select>

          <textarea
            onChange={getUserData}
            name="message"
            value={user.message}
            placeholder="Write A Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contect;
