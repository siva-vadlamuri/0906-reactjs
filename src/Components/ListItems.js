import React from "react";

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
