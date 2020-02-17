import React from "react";
import Button from "@material-ui/core/Button";
import Signup from "./signup";
import "../src/styles.css";
import Login from "./login";
import CreatePost from './createPost'

class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    this.state = {
      users: users,
      signing: false,
      creating: false,
      posts: posts
    };
  }

  returnSignUp = () => {
    this.setState(
      state => ({
        ...state,
        signing: true
      }),
      () => console.log(this.state.signing)
    );
  };
  returnLogin = () => {
    this.setState(
      state => ({
        ...state,
        signing: false
      }),
      () => console.log(this.state.signing)
    );
  };

  
  saveUsers = (users = JSON.parse(localStorage.getItem("users"))) => {
    this.setState(state => ({
      ...state,
      users: users
    }));
  };


  logout = () => {
    if (window.confirm("Do you Want to leave your account?")) {
      this.setState(
        state => ({
          ...state,
          users: state.users.map(user => ({ ...user, online: false }))
        }),
        () => localStorage.setItem("users", JSON.stringify(this.state.users))
      );
    }
  };
  createPost = () => {
    this.setState(state => ({ ...state, creating: true }));
  };

  render() {
    return (
      <>
        <div className="header">
          <div className="titleBox">
            <img
              className="titleImg"
              alt="logo"
              src="https://icons-for-free.com/iconfiles/png/512/media+network+social+icon-1320193946175528745.png"
            ></img>
            <div className="title">Blog</div>
          </div>
          <div className="loginButtonBox">
            {this.state.users.some(user => user.online === true) ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className="loginButton"
                  onClick={() => this.logout()}
                >
                  Log Out
                </Button>
                <Button
                  variant="contained"
                  className="createPostButton"
                  onClick={() => this.createPost()}
                >
                  Create Post
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className="loginButton"
                  onClick={() => this.returnLogin()}
                >
                  Log In
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "10px" }}
                  className="signupButton"
                  onClick={() => this.returnSignUp()}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </div>
        {this.state.users.some(user => user.online === true) ? (
          this.state.creating ? (
            console.log("creating new post CARD"),
            <CreatePost/>
          ) : this.state.posts.length > 0 ? (
            console.log("post ka")
          ) : (
            console.log("post chka")
          )
        ) : this.state.signing ? (
          <Signup saveUsers={this.saveUsers} returnLogin={this.returnLogin} />
        ) : (
          <Login saveUsers={this.saveUsers} returnSignUp={this.returnSignUp} />
        )}
      </>
    );
  }
}

export default Mainpage;
