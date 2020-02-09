import React from "react";
import { Timeline } from "antd";

export const convertToHex = digit =>
  ("0" + Number(digit).toString(16)).slice(-2).toUpperCase();

export const ArithmeticCodeItems = (
  codes,
  currentLineNumber,
  firstNumber,
  secondNumber
) => {
  return (
    codes &&
    codes.map(code => {
      return (
        <Timeline.Item
          style={{ fontFamily: "Consolas" }}
          key={code.lineNumber + code.comment}
          color={currentLineNumber !== code.lineNumber ? "grey" : "red"}
          dot={`#${code.lineNumber}`}
        >
          <span
            style={{
              textAlign: "right",
              paddingLeft: 15,
              color: currentLineNumber !== code.lineNumber ? "" : "red"
            }}
          >
            {code.type === "Data Definition"
              ? `${code.leftValue && code.leftValue.value} ${code.operation} ${
                  code.lineNumber === 5
                    ? convertToHex(firstNumber)
                    : convertToHex(secondNumber)
                }`
              : `${code.operation || ""} ${code.leftValue.value || ""}${
                  code.rightValue.value ? "," + code.rightValue.value : ""
                }`}
          </span>
        </Timeline.Item>
      );
    })
  );
};
