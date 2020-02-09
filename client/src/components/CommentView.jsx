import React from "react";
import { Comment } from "antd";

export default function CommentView(props) {
  return (
    <Comment
      style={{ fontFamily: "Consolas" }}
      content={props.currentComment || ""}
    />
  );
}
