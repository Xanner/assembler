import React, { PureComponent } from "react";
import arrayExample from "../../dal/arithmetic/array.json";
import ArithmeticPage from "../ArithmeticPage";
import { Row, InputNumber } from "antd";

const userAction = <></>;

export default class ArrayPage extends PureComponent {
  render() {
    return (
      <ArithmeticPage
        headerTitle="Tablice"
        data={arrayExample}
        userAction={userAction}
        cardText="Tablice w assemblerze"
        beforeYouStartPath="/guide/register"
      />
    );
  }
}
