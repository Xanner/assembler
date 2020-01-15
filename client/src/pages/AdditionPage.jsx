import React, { Component } from 'react';
import { Layout, Col, Row, InputNumber, Timeline, Card, Button } from 'antd';
import {
    PlusOutlined,
    PauseOutlined,
    PlayCircleOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';
import Diagram from '../components/Diagram';

const { Content, Header } = Layout;

export default class AdditionPage extends Component {
    state = {}
    render() {
        return (
            <Layout className="site-layout">
                <Header style={{ background: '#fff' }}>
                    <h2>
                        Operacje arytmetyczne - dodawanie
                    </h2>
                </Header>
                <Content style={{ background: '#fff' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Row type="flex" justify="start">
                            <Col span={8}>
                                <Row style={{ marginBottom: 16 }}>
                                    <InputNumber size="large" />
                                    <PlusOutlined />
                                    <InputNumber size="large" />
                                    <PauseOutlined rotate={90} />
                                    <InputNumber disabled size="large" />
                                </Row>
                                <Row style={{ marginBottom: 8 }} justify="start">
                                    <Button type="primary">
                                        <PlayCircleOutlined />
                                        Start
                                </Button>
                                    {' '}
                                    <Button type="secondary">
                                        <CaretRightOutlined />
                                        Następny krok
                                </Button>
                                    {' '}
                                    <Button type="secondary">
                                        Restart
                                </Button>
                                </Row>
                                <Row>
                                    <Card>
                                        <Timeline pendingDot>
                                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                                            <Timeline.Item color="red">Create a services site 2015-09-01</Timeline.Item>
                                            <Timeline.Item color="gray">Create a services site 2015-09-01</Timeline.Item>
                                            <Timeline.Item color="gray">Create a services site 2015-09-01</Timeline.Item>
                                        </Timeline>
                                    </Card>
                                </Row>
                            </Col>
                            <Col span={16}>
                                <Diagram />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout >

        );
    }
}
