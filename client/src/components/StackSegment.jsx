import React, { Component } from "react";
import { Input } from "antd";
import { convertToHex } from "./ArithmeticCodeItems";

let STACKRAM = [];
let STACKinitialAddress = 710;
for (let i = 0; i < 128; i++) {
  STACKRAM.push({
    address: `0${STACKinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

class StackSegment extends Component {
  state = {};
  render() {
    return STACKRAM.map((item, index) => {
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

export default StackSegment;
