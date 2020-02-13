import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import "../src/styles.css";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button'
import Signup from "./signup";

class Login extends React.Component {
  constructor(props) {
    super(props);
    const name = null;
    const password = null;
    this.state = {
      name:name,
      password:password,
    };
  }

  cardStyle = () => {
    return {
      background: "#f5f5f5",
      width: "500px",
      height: "300px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-250px",
      marginTop: "-150px",
      textAlign:"center"
    };
  };

  handleName = (event) => {
    // const name = event.target.value.replace(/\s\s+/g, " ");
    const name = event.target.value;
    this.setState(state => ({ 
      ...state, name: name
    }),() => console.log(this.state.name))
  }

  handlePass = (event) => {
    const pass = event.target.value;
    this.setState(state => ({ 
      ...state, password: pass
    }),() => console.log(this.state.password))
  }

  login = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    if(users.some(user => user.name === this.state.name && user.password === this.state.password)){
     let currentUser = users.find(user => user.name === this.state.name && user.password === this.state.password);
      currentUser.online = !currentUser.online;
      localStorage.setItem("users",JSON.stringify(users));
      this.props.saveUsers();
    }
  }
  render() {
    return (
      <>
        <Card className="loginCard" style={this.cardStyle()} variant="outlined">
          <CardContent>
            <Typography variant="h5">Log In</Typography>
            <br></br>
            <Typography >Enter your Name<span style={{color:"red"}}>*</span></Typography>
            <Input  className="enterInfo" onChange={(event)=> this.handleName(event)} required={true} placeholder="Name"/>
            <Typography>Enter your Password<span style={{color:"red"}}>*</span></Typography>
            <Input type="password" onChange={(event) => this.handlePass(event)} required={true} className="enterInfo" placeholder="Password"/>
            <br></br>
            <Button variant="contained" onClick={() => this.login()} style={{marginTop:'5px'}} >Login</Button>
            <Typography>Haven't register yet? <a href="#" onClick={this.props.returnSignUp}>Sign up</a></Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Login;
