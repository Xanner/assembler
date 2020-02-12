import React, { PureComponent } from "react";
import procedureExample from "../../dal/arithmetic/addition.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const userAction = <></>;

export default class ProcedurePage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Procedury"
        data={procedureExample}
        userAction={userAction}
        cardText="Procedury w assemblerze"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
