import React, { Component } from "react";
import { convertToHex } from "./ArithmeticCodeItems";
import { Input } from "antd";

let DSRAM = [];
let DSinitialAddress = 720;
for (let i = 0; i < 128; i++) {
  DSRAM.push({
    address: `0${DSinitialAddress}:00${convertToHex(i)}`,
    content: "00"
  });
}

class DataSegment extends Component {
  state = {};

  render() {
    return DSRAM.map((item, index) => {
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

export default DataSegment;
