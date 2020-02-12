import React, { Component } from "react";
import { Button, Input } from "antd";
const { TextArea } = Input;

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConsoleVisible: false,
      isConsoleDisabled: false,
      tempConsole: ""
    };
  }

  componentDidUpdate() {
    if (this.props.consoleAction === "input") {
      this.setState({ isConsoleDisabled: false });
    }
    // if(this.props.consoleAction === "output") {
    //   this.setState({
    //     isConsoleDisabled: true,
    //     tempConsole: ""
    //   });
    // }
  }

  onInputChange = text => this.setState({ tempConsole: text });

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
          <>
            <TextArea
              disabled
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
            <TextArea
              disabled={this.state.isConsoleDisabled}
              value={this.state.tempConsole}
              onChange={e => this.onInputChange(e.target.value)}
              style={{
                width: 300,
                height: 40,
                borderColor: "white",
                backgroundColor: "black",
                color: "white",
                position: "fixed",
                top: 430,
                right: 10
              }}
            />
          </>
        )}
      </>
    );
  }
}

export default Console;
