import React, { Component } from "react";
import withRouter from "../HOC/withRouter";
import data from "../data/user.json";
import {
  Input,
  Typography,
  Col,
  Row,
  Table,
  Divider,
  Image,
  Button,
} from "antd";

const { Title } = Typography;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }
  componentDidMount() {
    const userDetail = data.filter((user) => {
      return parseInt(user.id) === parseInt(this.props.params.id);
    })[0];

    return this.setState({ user: userDetail });
  }
    render() {
          if (this.state.user === undefined) {
            this.props.navigate("*");
          }
    return (
      <div>
        <Title style={{ marginBottom: "2rem" }} level={3}>
          Detail User
        </Title>
        <Row justify="center">
          <Col span={6}>
            <div style={{ width: "100%" }}>
              <Image
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
                src={this.state.user.Photo}
                alt="avatar"
              />
            </div>
          </Col>
          <Divider />
          <Col span={20}>
            <table
              style={{
                width: "100%",
                border: "1px solid black",
              }}
            >
              <tr>
                <th
                  style={{
                    backgroundColor: "#E7E9EB",
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Username
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.username}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    backgroundColor: "#E7E9EB",
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  First Name
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.first_name}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Last Name
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.last_name}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.email}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Phone
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.phone}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Gender
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.gender}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Job
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.job}
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "#E7E9EB",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  Country
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    width: "50%",
                    height: "40px",
                  }}
                >
                  {this.state.user.country}
                </th>
              </tr>
            </table>
          </Col>
          <Divider />
          <Col span={20}>
            <button onClick={() => this.props.navigate(-1)}>go back</button>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Detail);
