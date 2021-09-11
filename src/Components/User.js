import React from "react";
import CounterClass from "./CounterClass";

class User extends React.Component {
  // properies & Method
  // state
  // setState,componentDidMount

  // Intilization Phase
  // Methods in Mouting Phase
  // 1) Constructor
  //   2) render method
  // componentDidMount
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [{}],
  //   };
  //   console.log("Component Constructor");
  // }
  state = {
    users: [{}],
    username: "",
    data: "",
    updateTheData: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log(
      "Get Derived State From Props" +
        JSON.stringify(props) +
        JSON.stringify(state)
    );
    // this.setState({ data: props.data });
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");
    return true;
  }

  // Sychronous and Asynchronous
  async getUserData() {
    // Await --> It will wait untill the promise either resolved or rejected
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });
  }
  // AJAX
  // XMLHttpRequest
  // es 6 promises Resolved State or Rejected
  // es 7 ASYNC and AWAIT

  componentDidMount() {
    console.log("Component Did Mount");
    // fetch is browser method
    this.getUserData();
    // the componentDidMount  method rus after the component output has been rendered to the DOM
  }
  componentDidUpdate() {
    console.log("Component DID update");
    // this.setState({ updateTheData: false });
    // You Can make an Asynchronous Call to Server
  }
  componentWillUnmount() {
    console.log("Component WILL Unmount");
  }
  //
  render() {
    console.log("Component Render Method");
    return (
      <div className="ml-2">
        {/* <h1>User Component</h1> */}
        {/* <CounterClass /> */}

        <table>
          <thead>
            <th>
              <td>Id</td>
            </th>
            <th>
              <td>Name</td>
            </th>
            <th>
              <td>User Name</td>
            </th>
            <th>
              <td>Email</td>
            </th>
            <th>
              <td>City</td>
            </th>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>

                <td>{user.email}</td>
                <td>{user.address?.city}</td>
              </tr>
              //   <p>{user.name}</p>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => {
            this.setState({ updateTheData: true });
          }}
        >
          Get The Data Again
        </button>
      </div>
    );
  }
}
export default User;
