import React, { Component } from "react";
import { Input, Col, Row } from "antd";

class Register extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col xs={8}></Col>
          <Col xs={8} style={{ textAlign: "center" }}>
            H
          </Col>
          <Col xs={8} style={{ textAlign: "center" }}>
            L
          </Col>
        </Row>
        <Row>
          <Col xs={8}>AX:</Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>BX:</Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>CX:</Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DX:</Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>CS:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>IP:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>SS:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>SI:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DI:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DS:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>ES:</Col>
          <Col xs={16}>
            <Input size="small" disabled />
          </Col>
        </Row>
      </>
    );
  }
}

export default Register;
