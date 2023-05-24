import React from "react";
export default function Hero3({ children, hero3 }) {
    return <header className={hero3}>{children}</header>;
  }
  
  Hero3.defaultProps = {
    hero3: "defaultHero3"
  };