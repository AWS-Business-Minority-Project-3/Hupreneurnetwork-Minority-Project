/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import SearchBar from "../NavSearchBar/NavSearchBar";
import { signUp, signIn } from 'aws-amplify/auth';
import { Button as AmplifyButton} from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import "./style.css";

export const NavBarHeader = ({ className }) => {

  async function handleSignUp({ username, password, email, phone_number }){
    try{
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            phone_number
          },
          autoSignIn: true
        }
      });

      console.log(userId);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async function signIn({ username, password}){
    try{
      const { isSignedIn, nextStep } = await signIn({ username, password });

    } catch (error) {
      console.log('error signing in', error);
    }
  }

  return (
    <div className={`nav-bar-header ${className}`}>
      <div className="frame">
        {/* <img className="amplify-mark" alt="Amplify mark" src="/img/amplify-mark.svg" /> */}
        <div className="text-wrapper"><Link to="/marketingpage">Home</Link></div>
        <div><SearchBar/></div>
        <div className="text-wrapper"><Link to="/categoryview">Categories</Link></div>
        <div className="text-wrapper"><Link to="/businessview">Businesses</Link></div>
        <div className="text-wrapper"><Link to="/businessowneroverview">HU For Business Owners</Link></div>
      </div>
      <div className="actions">
        {/* <AmplifyButton><Button className="button-instance" isDisabled={false} onClick={handleLogin} label="Log in" size="default" variation="link" /></AmplifyButton>
        <AmplifyButton><Button className="button-instance" isDisabled={false} label="Sign up" size="default" variation="primary" /></AmplifyButton> */}
        <AmplifyButton className="button-instance" isDisabled={false} onClick={signIn} label="Log in" size="default" variation="link">Login</AmplifyButton>
        <AmplifyButton className="button-instance" isDisabled={false} onClick={handleSignUp} label="Sign up" size="default" variation="primary">Signup</AmplifyButton>
      </div>
    </div>
  );
};
