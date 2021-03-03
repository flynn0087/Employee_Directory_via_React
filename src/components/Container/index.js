//dependencies
import React from "react";

// this function makes the container that structures the page
function Container(props) {
  return <div className="container" >{props.children}</div>;
}

export default Container;