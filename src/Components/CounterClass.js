import React, { Component } from "react";

class CounterClass extends Component {
  //   constructor(props){
  //    super(props);
  //   }

  // Component class was built by react team
  // Component class some properties and methods

  // CounterClass is our class
  // Component is class given by React component

  // inheritance Accuring properties and functions from parent class

  // state
  // In Class Based Components
  //   State is an object of a  component data that holds some information that may change later
  // the true power of react comes with state

  // props is properties which is used to passs from one compoenent to another  and they are immutable (cannot change)
  // State is mutable (we can change the data)
  isLoginedIn = false;
  state = {
    count: 0,
  };
  increment() {
    //   You cannot update the state directly
    // Never mutate (change) the state directly
    this.setState({ count: this.state.count + 1 }, function () {
      console.log(this.state.count);
    });
    console.log(`before setState method ${this.state.count}`);

    // setState is asynchronous methods
    console.log("Button Clicked");
  }

  decrement() {
    //   count value is less than 1 dont decrement
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  reset() {
    this.setState({ count: 0 });
  }

  //   this will point to current object

  render() {
    return (
      <div>
        <div>
          <p> {this.state.count} </p>
          <button
            onClick={() => {
              this.increment();
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              this.decrement();
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              this.reset();
            }}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}
export default CounterClass;

// const user1 = new CounterClass()
