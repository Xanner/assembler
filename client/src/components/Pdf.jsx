import React, { Component } from "react";
import { Layout, Col, Row, Button, Icon } from "antd";

const { Content, Header } = Layout;
const pdfjsLib = window["pdfjs-dist/build/pdf"];

export default class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.pdfSource,
      pdf: null,
      pageNum: 1,
      endPage: 1
    };
  }

  loadPDF = async () => {
    const pdf = await pdfjsLib.getDocument(this.state.path);
    await this.setState({ pdf: pdf, endPage: pdf.numPages });
    this.renderPage(1);
  };
  renderPage = pageNum => {
    const { pdf } = this.state;
    pdf.getPage(pageNum).then(page => {
      const canvas = document.querySelector(".pdf-window");
      var viewport = page.getViewport({ scale: 1.0 });
      var context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
      renderTask.promise.then(function() {
        console.log("Page rendered");
      });
    });
  };
  changePage = offset => {
    const { pageNum, endPage } = this.state;
    const newPage =
      pageNum + offset < 1
        ? 1
        : pageNum + offset > endPage
        ? endPage
        : pageNum + offset;
    if (newPage !== pageNum) {
      this.renderPage(newPage);
      this.setState({ pageNum: newPage });
    }
  };

  componentDidMount() {
    this.loadPDF();
  }
  render() {
    return (
      <>
        <Header style={{ background: "#fff" }}>
          <h2>{this.props.title}</h2>
        </Header>
        <Content>
          <Row type="flex" justify={"center"}>
            <Col xs={10}>
              <canvas className="pdf-window" />
            </Col>
          </Row>
          <Row type="flex" justify={"center"}>
            <Row type="flex" justify={"center"}>
              <Col xs={12}>
                <Button
                  disabled={this.state.pageNum === 1}
                  type="primary"
                  onClick={() => this.changePage(-1)}
                  icon="left"
                >
                  Poprzednia
                </Button>
              </Col>

              <Col xs={12}>
                <Button
                  disabled={this.state.endPage === this.state.pageNum}
                  type="primary"
                  onClick={() => this.changePage(1)}
                  icon="right"
                >
                  Następna
                </Button>
              </Col>
            </Row>
          </Row>
        </Content>
      </>
    );
  }
}
