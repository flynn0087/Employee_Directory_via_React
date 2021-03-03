//dependencies
import React from "react";

//this function determines the column size 
function Col(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;