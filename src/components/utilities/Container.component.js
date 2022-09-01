import React from "react";

const Container = ({ children }) => {
  const desktop = "max-w-7xl px-10";
  const laptop = "xl:max-w-5xl xl:px-8";
  const tabletLandscape = "lg:max-w-3xl lg:px-6";
  const tablet = "md:max-w-full md:px-4";
  const mobile = "sm:max-w-full sm:px-2";
  
  return (
    <div
      className={`mx-auto ${desktop} ${laptop} ${tabletLandscape} ${tablet} ${mobile}}`}
    >
      {children}
    </div>
  );
};

export default Container;
