import React, { Component } from "react";
import { Button, Input } from "antd";
const { TextArea } = Input;

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConsoleVisible: false,
      isConsoleDisabled: false
    };
  }

  render() {
    return (
      <>
        <Button
          onClick={() =>
            this.setState({
              isConsoleVisible: !this.state.isConsoleVisible
            })
          }
        >
          {!this.state.isConsoleVisible ? "Pokaż" : "Ukryj"} konsole
        </Button>
        {this.state.isConsoleVisible && (
          <TextArea
            disabled={this.state.isConsoleDisabled}
            value={this.props.consoleContent}
            style={{
              width: 300,
              height: 400,
              backgroundColor: "black",
              color: "white",
              position: "fixed",
              top: 30,
              right: 10
            }}
          />
        )}
      </>
    );
  }
}

export default Console;
