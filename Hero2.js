import React from "react";
export default function Hero2({ children, hero2 }) {
    return <header className={hero2}>{children}</header>;
  }
  
  Hero2.defaultProps = {
    hero2: "defaultHero2"
  };