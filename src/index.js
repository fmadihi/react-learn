import React from "react";

export const Welcome = () => {
  return <h1>Welcome to react world developer</h1>;
};

const Website = () => {
  return (
    <div>
      <Welcome />
      <h2>
        Fatemeh Madihi and I am <span>{Math.floor(Math.random() * 30)} years old.</span>
      </h2>
    </div>
  );
};
export default Website;
