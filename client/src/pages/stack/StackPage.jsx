import React, { PureComponent } from "react";
import stackExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const userAction = <></>;

export default class StackPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Stack"
        data={stackExample}
        userAction={userAction}
        cardText="Stos w assemblerze"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
