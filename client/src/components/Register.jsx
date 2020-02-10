import React, { PureComponent } from "react";
import { Input, Col, Row } from "antd";

class Register extends PureComponent {
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
            <Input size="small" value={this.props.data["AH"]} disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["AL"]} disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>BX:</Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["BH"]} disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["BL"]} disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>CX:</Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["CH"]} disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["CL"]} disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DX:</Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["DH"]} disabled />
          </Col>
          <Col xs={8}>
            <Input size="small" value={this.props.data["DL"]} disabled />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>CS:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["CS"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>IP:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["IP"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>SS:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["SS"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>SP:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["SP"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>SI:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["SI"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DI:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["DI"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>DS:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["DS"]}
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>ES:</Col>
          <Col xs={16}>
            <Input
              size="small"
              style={{ textAlign: "center" }}
              value={this.props.data["ES"]}
              disabled
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Register;
