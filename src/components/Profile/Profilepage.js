import React from "react";
import "./Profilepage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profilepage() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const Home = () => {
    navigate("/");
  };

  return (
    <div className="bg-color">
      <form id="form" className="validate">
        <div className="form-field">
          <label>Full Name :</label>
          <label>{userData.name}</label>
        </div>
        <div className="form-field">
          <label>Email :</label>
          <label>{userData.email}</label>
        </div>
        <div className="form-field">
          <label>Password :</label>
          <label>{userData.password}</label>
        </div>
        <div className="form-field">
          <label></label>
          <input onClick={Home} type="submit" value="Home" />
        </div>
      </form>
    </div>
  );
}

export default Profilepage;
