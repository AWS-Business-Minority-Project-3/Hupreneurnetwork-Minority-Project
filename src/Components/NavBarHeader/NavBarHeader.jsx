/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import SearchBar from "../NavSearchBar/NavSearchBar";
import { signUp, signIn } from 'aws-amplify/auth';
import { Link } from 'react-router-dom';
import "./style.css";

export const NavBarHeader = ({ className }) => {

  return (
    <div className={`nav-bar-header ${className}`}>
      <div className="frame">
        <div className="text-wrapper"><Link to="/marketingpage">Home</Link></div>
        <div><SearchBar/></div>
        <div className="text-wrapper"><Link to="/categoryview">Categories</Link></div>
        <div className="text-wrapper"><Link to="/businessowneroverview">HU Business</Link></div>
      </div>
      <div className="actions">
        <Link to="/authentication">
          <Button className="button-instance" isDisabled={false} label="Log In" size="default" variation="link" />
        </Link>
        <Link to="/authentication">
          <Button className="button-instance" isDisabled={false} label="Sign Up" size="default" variation="primary" />
        </Link>
      </div>
    </div>
  );
};
