import React, { PureComponent } from "react";
import ifConditionExample from "../../dal/arithmetic/conditions1.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const multiplicationAction = <></>;

export default class IfConditionPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Warunki - if"
        data={ifConditionExample}
        userAction={multiplicationAction}
        cardText="Warunek if...."
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
