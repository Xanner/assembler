import React, { Component } from "react";
import { Input } from "antd";
import { convertToHex } from "./ArithmeticCodeItems";

let CSRAM = [];
let CSinitialAddress = 721;
for (let i = 0; i < 128; i++) {
  CSRAM.push({
    address: `0${CSinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

class CodeSegment extends Component {
  state = {};
  render() {
    return CSRAM.map((item, index) => {
      if (index % 16 === 0)
        return (
          <span key={item.address}>
            {index !== 0 && <br />}
            <b>{item.address}:</b>{" "}
            <Input
              style={{ width: "31px" }}
              size="small"
              disabled
              value={item.content}
            />
          </span>
        );
      return (
        <span key={item.address}>
          <Input
            style={{ width: "31px" }}
            size="small"
            disabled
            value={item.content}
          />
        </span>
      );
    });
  }
}

export default CodeSegment;
