import React from "react";
import Card from "@material-ui/core/Card";
import Input from "@material-ui/core/Input";
import { TextField, Button } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./styles.css";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    this.state = { posts: posts };
  }

  //                ^
  //               ||
  //   title, content, date, author,

  //   addNewPost = () => {

  //     this.setState(state => ({
  //       ...state,
  //       posts: [
  //         ...state.posts,
  //         {
  //           title: postTitle,
  //           content: postContent,
  //           date: currentDate,
  //           author: currentAuthor,
  //           comments: comments
  //         }
  //       ]
  //     }));
  //   };

  render() {
    return (
      <>
        <div className="newPostContainer">
          <TextField
            variant="filled"
            placeholder="Write here your Post Title"
            label="Post Title"
          />
          <br></br>
          <TextareaAutosize
            placeholder="Write your post"
            variant="filled"
            className="postText"
          />
          <Button
            variant="contained"
            style={{ width: "200px", margin: "auto", marginTop: "10px" }}
          >
            ADD Post
          </Button>
        </div>
      </>
    );
  }
}

export default CreatePost;
