import React, { Component } from "react";
import { Typography, Col, Row, Divider, Image } from "antd";
import photo from "../image.png";

const { Title } = Typography;

export default class About extends Component {
  render() {
    return (
      <div>
        <Title style={{ marginBottom: "2rem" }} level={3}>
          About
        </Title>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <Image
              style={{ width: "150px", height: "130px", objectFit: "cover" }}
              src={photo}
              alt="avatar"
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: "2rem" }}>
          <Col style={{ fontWeight: "bold", fontSize: "20px" }}>
            Ian Pangestu Setyanto
          </Col>
        </Row>
        <Row>
          <Col style={{ fontWeight: "bold", fontSize: "20px" }}>Sragen</Col>
        </Row>
      </div>
    );
  }
}
