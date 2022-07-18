import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

export default class SideItem extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <Row>
          <Col span={this.props.isCollapse ? 24 : 6}>
            <Title level={3} style={{ color: "white", textAlign: "center" }}>
              {this.props.icon}
            </Title>
          </Col>
          <Col span={this.props.isCollapse ? 0 : 18}>
            {!this.props.isCollapse && (
              <Title level={4} style={{ color: "white" }}>
                {this.props.title}
              </Title>
            )}
          </Col>
        </Row>
      </Link>
    );
  }
}
