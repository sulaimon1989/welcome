import React, { Component } from "react";

function Display(props) {
  let category = "loading";

  if (props.category && props.category.title) {
    category = props.category.title;
  }
  return (
    <div>
      <strong>Question: </strong> {props.question} <br />
      <strong>Value: </strong> {props.value} <br />
      <strong>Category: </strong> {category} <br />
      <strong>User Score: </strong> {props.score}
    </div>
  );
}
export default Display;
