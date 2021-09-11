import React from "react";

// Components
// props (immutable)
// State 
// list & keys
// Inline Css , External CSS
// Module CSS

// Life Cycle Methods 
// Components goes through several life cycle methods,
// 1) Mounting 
// When an instance of a component is created and inserted into the DOM 

function ListItems() {
  const techCompanies = ["Apple", "Netflix", "Google"];
  return (
    <div>
      {techCompanies.map((company, index) => (
        <div key={index}>
          <p>{company}</p>
        </div>
      ))}
    </div>
  );
}

export default ListItems;
