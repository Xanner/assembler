import React, { PureComponent } from "react";
import loopExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const userAction = <></>;

export default class LoopPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Pętle"
        data={loopExample}
        userAction={userAction}
        cardText="Pętle w assemblerze"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
