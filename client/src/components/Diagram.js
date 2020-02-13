import React, { Component } from "react";
import { ReactComponent as DiagramCanva } from "../assets/Intel_8086_block_scheme.svg";

export default class Diagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activReg: {
        currentLeftRegister: null,
        currentRightRegister: null
      }
    };
  }

  // document.querySelector('#ALU')
  // document.querySelector('#A-BUS')
  // document.querySelector('#C-BUS')
  // document.querySelector('#reg_CS')
  // document.querySelector('#reg_DS')
  // document.querySelector('#reg_SS')
  // document.querySelector('#reg_ES')
  // document.querySelector('#reg_IP')

  // document.querySelector('#reg_AH')
  // document.querySelector('#reg_AL')

  // document.querySelector('#reg_BH')
  // document.querySelector('#reg_BL')

  // document.querySelector('#reg_CH')
  // document.querySelector('#reg_CL')

  // document.querySelector('#reg_DH')
  // document.querySelector('#reg_DL')

  // document.querySelector('#reg_SP')
  // document.querySelector('#reg_BP')
  // document.querySelector('#reg_SI')
  // document.querySelector('#reg_DI')

  static getDerivedStateFromProps = (props, state) => {
    if (props.activReg !== state.activReg) {
      if (props.activReg.currentLeftRegister) {
        document.querySelector("#reg_AH").removeAttribute("class");
        document.querySelector("#reg_AL").removeAttribute("class");
        document.querySelector("#ALU").removeAttribute("class");
        document.querySelector("#reg_DS").removeAttribute("class");
        document.querySelector("#reg_BH").removeAttribute("class");
        document.querySelector("#reg_BL").removeAttribute("class");
        document.querySelector("#reg_DH").removeAttribute("class");
        document.querySelector("#reg_DL").removeAttribute("class");
        document.querySelector("#DataBUS").removeAttribute("class");
        switch (props.activReg.currentLeftRegister) {
          case "ax":
            document
              .querySelector("#reg_AH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#reg_AL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "al":
            document
              .querySelector("#reg_AL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "ah":
            document
              .querySelector("#reg_AH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "bx":
            document
              .querySelector("#reg_BH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#reg_BL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "bl":
            document
              .querySelector("#reg_BL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "bh":
            document
              .querySelector("#reg_BH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "cx":
            document
              .querySelector("#reg_CH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#reg_CL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "cl":
            document
              .querySelector("#reg_CL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "ch":
            document
              .querySelector("#reg_CH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "dx":
            document
              .querySelector("#reg_DH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#reg_DL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "dl":
            document
              .querySelector("#reg_DL")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "dh":
            document
              .querySelector("#reg_DH")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "ds":
            document
              .querySelector("#reg_DS")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "cs":
            document
              .querySelector("#reg_DS")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "di":
            document
              .querySelector("#reg_DI")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
          case "si":
            document
              .querySelector("#reg_SI")
              .setAttribute("class", "reg_active_left");
            document
              .querySelector("#ALU")
              .setAttribute("class", "reg_active_left");
            break;
        }
        switch (props.activReg.currentRightRegister) {
          case "ax":
            document
              .querySelector("#reg_AH")
              .setAttribute("class", "reg_active_right");
            document
              .querySelector("#reg_AL")
              .setAttribute("class", "reg_active_right");
            break;
          case "al":
            document
              .querySelector("#reg_AL")
              .setAttribute("class", "reg_active_right");
            break;
          case "ah":
            document
              .querySelector("#reg_AH")
              .setAttribute("class", "reg_active_right");
            break;
          case "bx":
            document
              .querySelector("#reg_BH")
              .setAttribute("class", "reg_active_right");
            document
              .querySelector("#reg_BL")
              .setAttribute("class", "reg_active_right");
            break;
          case "bl":
            document
              .querySelector("#reg_BL")
              .setAttribute("class", "reg_active_right");
            break;
          case "bh":
            document
              .querySelector("#reg_BH")
              .setAttribute("class", "reg_active_right");
            break;
          case "cx":
            document
              .querySelector("#reg_CH")
              .setAttribute("class", "reg_active_right");
            document
              .querySelector("#reg_CL")
              .setAttribute("class", "reg_active_right");
            break;
          case "cl":
            document
              .querySelector("#reg_CL")
              .setAttribute("class", "reg_active_right");
            break;
          case "ch":
            document
              .querySelector("#reg_CH")
              .setAttribute("class", "reg_active_right");
            break;
          case "dx":
            document
              .querySelector("#reg_DH")
              .setAttribute("class", "reg_active_right");
            document
              .querySelector("#reg_DL")
              .setAttribute("class", "reg_active_right");
            break;
          case "dl":
            document
              .querySelector("#reg_DL")
              .setAttribute("class", "reg_active_right");
            break;
          case "dh":
            document
              .querySelector("#reg_DH")
              .setAttribute("class", "reg_active_right");
            break;

          case "ds":
            document
              .querySelector("#reg_DS")
              .setAttribute("class", "reg_active_right");
            break;
          case "cs":
            document
              .querySelector("#reg_DS")
              .setAttribute("class", "reg_active_right");
            break;
          case "@data":
          case "a":
          case "b":
            document
              .querySelector("#DataBUS")
              .setAttribute("class", "reg_active_right");
            break;
        }

      }
      return {
        activReg: { ...props.activReg }
      };
    }
    return null;
  };

  render() {
    return (
      <div>
        <DiagramCanva />
      </div>
    );
  }
}
