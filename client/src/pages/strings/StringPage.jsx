import React, { PureComponent } from "react";
import stringExample from "../../dal/arithmetic/rstring1.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const userAction = <></>;

export default class ProcedurePage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Ciągi znaków"
        data={stringExample}
        userAction={userAction}
        cardText="Ciągi znaków w assemblerze"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
