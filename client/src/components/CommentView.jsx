import React from "react";
import { Comment } from "antd";

export default function CommentView(props) {
  return (
    <Comment
      style={{ fontFamily: "Consolas", maxWidth: 500 }}
      content={props.currentComment || ""}
    />
  );
}
