import React from "react";
import { Timeline, Popover } from "antd";
import CommentView from "./CommentView";

export const convertToHex = digit =>
  ("0" + Number(digit).toString(16)).slice(-2).toUpperCase();

export const ArithmeticCodeItems = (codes, currentLineNumber) => {
  return (
    codes &&
    codes.map(code => {
      return (
        <Timeline.Item
          style={{ fontFamily: "Consolas", cursor: "pointer" }}
          key={code.lineNumber + code.comment}
          color={currentLineNumber !== code.lineNumber ? "grey" : "red"}
          dot={`#${code.lineNumber}`}
        >
          <Popover
            placement="right"
            content={<CommentView currentComment={code.comment} />}
          >
            <span
              style={{
                textAlign: "right",
                paddingLeft: 15,
                color: currentLineNumber !== code.lineNumber ? "" : "red"
              }}
            >
              {code.type === "DataDefinition"
                ? `${code.leftValue && code.leftValue.value} ${
                    code.operation
                  } ${code.rightValue.value}`
                : `${code.operation || ""} ${code.leftValue.value || ""}${
                    code.rightValue.value ? "," + code.rightValue.value : ""
                  }`}
            </span>
          </Popover>
        </Timeline.Item>
      );
    })
  );
};
