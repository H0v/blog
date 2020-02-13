import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import "../src/styles.css";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    const name = null;
    const password1 = null;
    const password2 = null;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    this.state = {
      name:name,
      password1: password1,
      password2: password2,
      users: users,
    };
  }

  cardStyle = () => {
    return {
      background: "#f5f5f5",
      width: "500px",
      height: "320px",
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

  handlePass1 = (event) => {
    const pass1 = event.target.value;
    this.setState(state => ({ 
      ...state, password1: pass1
    }),() => console.log(this.state.password1))
  }

  
  handlePass2 = (event) => {
    const pass2 = event.target.value;
    this.setState(state => ({
      ...state, password2: pass2
    }),() => console.log(this.state.password2))
  }

  checkPass = () => {
    return this.state.password1 === this.state.password2 ? true : false;
  }

  register = () => {
    if(this.checkPass && this.state.name !== "" && this.state.name !== " "){
      this.setState(state => ({
        ...state,
        users: [...state.users,{name: state.name, password:state.password1, online:true}]
      }),() => localStorage.setItem("users",JSON.stringify(this.state.users)))
    }
  }

  render() {
    return (
      <>
        <Card className="loginCard" style={this.cardStyle()} variant="outlined">
          <CardContent>
            <Typography variant="h5">Sign up</Typography>
            <br></br>
            <Typography >Enter your Name<span style={{color:"red"}}>*</span></Typography>
            <Input  className="enterInfo"  onChange={(event) => this.handleName(event)}required={true} placeholder="Name"/>
            <Typography>Enter your Password<span style={{color:"red"}}>*</span></Typography>
            <Input type="password" required={true} onChange={(event) => this.handlePass1(event)}className="enterInfo" placeholder="Password"/>
            <br></br>
            <Input type="password" required={true} onChange={(event) => this.handlePass2(event)}className="enterInfo" placeholder="Password again"/>
            <br></br>
            <Button variant="contained" style={{marginTop:'5px'}} onClick={() => this.register()}>Sign up</Button>
            <Typography>Already have account? <a href="#" onClick={this.props.returnLogin}>Log In</a></Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Signup;
