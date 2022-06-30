import React, { useState } from "react";
import "./Homepage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form_Data } from "../../redux/action/actionCreators";

function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Name, setName] = useState("");

  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const next = () => {
    navigate("/profile");
    let data = {
      name: Name,
      email: Email,
      password: Password,
    };
    dispatch(Form_Data(data));
  };

  return (
    <div className="bg-color-home">
      <form id="form" className="validate">
        <div className="form-field">
          <label>Full Name</label>
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Joe Bloggs"
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email-input"
            id="email-input"
            placeholder="example@domain.com"
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password-input"
            id="password-input"
          />
        </div>
        <div className="form-field">
          <label></label>
          <input onClick={next} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Homepage;
