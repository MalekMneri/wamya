import React, { Component } from "react";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

class Feed extends Component {
  render() {
    var ok = ["Bad", "Normal", "good"];
    // See al=l customizable props below
    var mail = localStorage.getItem("email");
    return (
      <Feedback
        emailDefaultValue={mail}
        projectId="6091ce2ae2cb6100047099d9"
        feedbackTypes={["Bad", "Normal", "Good"]}
      />
    );
  }
}
export default Feed;
