import React, { PureComponent } from "react";
import { Input } from "antd";

class DataSegment extends PureComponent {
  render() {
    return this.props.data ? (
      this.props.data.map((item, index) => {
        if (index % 16 === 0)
          return (
            <span key={item.address}>
              {index !== 0 && <br />}
              <b>{item.address}:</b>{" "}
              <Input
                style={{
                  width: "34px",
                  color:
                    this.props.currentMemoryChanges.find(
                      m => m.address === item.address
                    ) && "red"
                }}
                size="small"
                disabled
                value={item.content}
              />
            </span>
          );
        return (
          <span key={item.address}>
            <Input
              style={{
                width: "34px",
                color:
                  this.props.currentMemoryChanges.find(
                    m => m.address === item.address
                  ) && "red"
              }}
              size="small"
              disabled
              value={item.content}
            />
          </span>
        );
      })
    ) : (
      <></>
    );
  }
}

export default DataSegment;
