import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    this.state = {
      posts: posts
    };
  }
  render() {
    return {};
  }
}

export default Post;
