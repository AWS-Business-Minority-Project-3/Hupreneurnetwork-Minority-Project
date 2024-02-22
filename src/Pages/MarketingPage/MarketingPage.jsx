import React from "react";
import { CtaSection } from "../../components/CtaSection";
import { Features } from "../../components/Features";
import { HeroLayout } from "../../components/HeroLayout";
import { MarketingFooter } from "../../components/MarketingFooter";
import { NavBarHeader } from "../../components/NavBarHeader";
import "./style.css";

export const MarketingPage = () => {
  return (
    <div className="marketing-page">
      <NavBarHeader className="nav-bar-header-2" />
      <HeroLayout className="hero-layout-1" eyebrowClassName="hero-layout-instance" mode="light" />
      <Features
        className="features-x"
        text="Shop Student Clothing Brands"
        text1="If you are hungry and looking for a home cooked meal then ordering from our cooking entrepreneurs is the way to go."
        text2="Get Hair Services"
        text3="Get Your Nails Done"
        text4="Get Plates of Food"
      />
      <CtaSection className="CTA-section-instance" />
      <MarketingFooter className="marketing-footer-instance" />
    </div>
  );
};
