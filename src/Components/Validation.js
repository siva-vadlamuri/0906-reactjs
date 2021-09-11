import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      password: "",
      firstNameError: "",
      emailError: "",
      passwordError: "",
    };
  }

  validateOnChange(name) {
    switch (name) {
      case "firstName":
        let firstNameError = "";
        if (this.state.firstName.length < 3) {
          firstNameError = "First Name Minimum 3 Characters";
        }
        this.setState({ firstNameError });
        break;
      case "email":
        let emailError = "";
        if (!this.state.email.includes("@")) {
          emailError = "Please Enter a Valid Email";
        }
        this.setState({ emailError });
        break;
      case "password":
        let passwordError = "";
        if (this.state.password.length < 6) {
          passwordError = "Password Should Be Minimum 6 characters";
        }
        this.setState({ passwordError });
        break;

      default:
        break;
    }
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, function () {
      this.validateOnChange(name);
    });
  }

  validate() {
    let firstNameError = "";
    let emailError = "";
    let passwordError = "";

    if (this.state.firstName.length < 3) {
      firstNameError = "First Name Minimum 3 Characters";
    }
    if (!this.state.email.includes("@")) {
      // sivagmail.com !false = true
      emailError = "Please Enter a Valid Email";
    }
    if (this.state.password.length < 6) {
      passwordError = "Password Should Be Minimum 6 characters";
    }

    // Falsy Values
    // null
    // undefined
    //  0
    // false (Boolean)
    // ''
    // NaN
    if (firstNameError || emailError || passwordError) {
      this.setState({ firstNameError, emailError, passwordError });
      return false;
    } else {
      this.setState({ firstNameError, emailError, passwordError });
      return true;
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    console.log(isValid);
    if (isValid) {
      this.setState({ firstName: "", email: "", password: "" }, function () {
        console.log(this.state);
      });
    }
  }
  // inline Style
  // External Style Sheet
  // Module CSS
  // internal Style
  styles = {
    conatiner: {
      textAlign: "center",
    },
    textDanger: {
      color: "red",
    },
  };
  render() {
    return (
      <div style={this.styles.conatiner}>
        <h1>Form Validation</h1>
        <form
          noValidate
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              value={this.state.firstName}
              onChange={(e) => {
                this.handleChange(e);
              }}
              onFocus={(e) => {
                this.handleChange(e);
              }}
            />
            <div style={this.styles.textDanger}>
              {this.state.firstNameError}{" "}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your Email"
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <div style={this.styles.textDanger}>{this.state.emailError} </div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={this.state.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <div style={this.styles.textDanger}>
              {this.state.passwordError}{" "}
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
