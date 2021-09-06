import React from "react";

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
  };
  async getUserData() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });
  }
  componentDidMount() {
    console.log("Component Did Mount");
    // fetch is browser method
    this.getUserData();
    // the componentDidMount  method rus after the component output has been rendered to the DOM
  }
  //
  render() {
    console.log("Component Render Method");
    return (
      <div className="ml-2">
        {/* <h1>User Component</h1> */}

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
              <tr>
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
      </div>
    );
  }
}
export default User;
