import React, { useState, useEffect } from "react";

// There is no state for Functional Component  (useState)
// React Life Cycle Methods  (useEffect)
// Mounting Phase
// Updating Phase
// Unmounting Phase

function UseEffectHook() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const getTheDataFromServer = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const result = await response.json();
    console.log(result);
  };
  // This UseEffect Will Be Called Ever time When The State Or Props Is Updated

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("Component rerendered");
    window.addEventListener("resize", updateWindowWidth);
    // Unmount When the Component is Unmounting We need clean up the Resources
    return () => {
      console.log("Detach Listener");
      window.removeEventListener("resize", updateWindowWidth);
    };
  });

  //   Only When The Component is Mounted first Time []
  //   Alternative For componentDidMount
  useEffect(() => {
    console.log("Component Mounted");
    getTheDataFromServer();
  }, []);

  useEffect(() => {
    console.log("Componet is Update Because Name is Changed");
  }, [name]);

  // Pagination
  // 1-1000
  // 1-20,

  //   Component unmount

  return (
    <div>
      <div>Window Inner Width : {windowWidth}</div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UseEffectHook;
