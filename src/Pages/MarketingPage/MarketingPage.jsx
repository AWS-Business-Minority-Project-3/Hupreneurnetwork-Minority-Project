import React from "react";
import {  GetStartedCustomer, Features, GetStartedBusinessOwner, Header  } from '../../ui-components';
import "./style.css";

export const MarketingPage = () => {
  return (
    <div className="marketing-page">
      {/* <NavBarHeader className="nav-bar-header-2" /> */}
      <Header width="100%" />
      <GetStartedCustomer width="100%"/>
      <GetStartedBusinessOwner width="100%"/>
      <Features width="100%"/>
    </div>
  );
};
