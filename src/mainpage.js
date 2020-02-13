import React from "react";
import Button from "@material-ui/core/Button";
import Signup from "./signup"
import "../src/styles.css";
import Login from './login'

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signing:false
    };
  }

  returnSignUp = () => {
    this.setState(state => ({
      ...state,
      signing:true
    }),() => console.log(this.state.signing));
  }
  returnLogin = () => {
    this.setState(state => ({
      ...state,
      signing:false
    }),() => console.log(this.state.signing));
  }

  saveUsers = () => {
    this.setState(state => ({
      ...state,
      users : JSON.parse(localStorage.getItem("users"))
    }))
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="titleBox">
            <img
              className="titleImg"
              src="https://icons-for-free.com/iconfiles/png/512/media+network+social+icon-1320193946175528745.png"
            ></img>
            <div className="title">Blog</div>
          </div>
          <div className="loginButtonBox">
            <Button variant="contained" color="primary" className="loginButton"  onClick={() => this.returnLogin()}>
              Log In
            </Button>
            <Button variant="contained" color="secondary" style={{marginLeft:"10px"}} className="signupButton" onClick={() => this.returnSignUp()}>
              Sign up
            </Button>
          </div>
        </div>
        {this.state.signing ? 
        <Signup saveUsers={this.saveUsers} returnLogin={this.returnLogin}/>:
        <Login saveUsers={this.saveUsers} returnSignUp={this.returnSignUp}/>
        }
        </>
    );
  }
}

export default Mainpage;
