import React, { useState } from "react";
// React is Released On 2013
// In ES6 (2015) class was introduced

// 2015 - 2019
// Class Based Components (StateFull Components) and Function Based Components (State Less Components)

// class MyClass extends React.Component {
// State and Life Cycle Methods
// componentDidMount()

// this keyword
// As There Was Drawbacks with class based Components React Introduced Hooks on 16.8 (2019)
// Using Hooks You can use state and life  methods in functional Components
// Logic Reusability (HOC)
//
// }

function Counter() {
  const [count, setCount] = useState(10);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    console.log(value);
    setForm({ [name]: value });
  };
  //   1st Value, 2nd Method to update the State

  return (
    <div>
      {console.log(form)}
      {/* <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div> */}

      <form>
        <input type="text" name="firstName" onChange={handleChange} />
        <input type="text" name="lastName" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Counter;
