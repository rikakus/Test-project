import React, { Component } from "react";
import { Typography} from "antd";

const { Title } = Typography;

export default class Contact extends Component {
  render() {
    return (
      <>
        <Title style={{ marginBottom: "2rem" }} level={3}>
          Contact Me
        </Title>
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
              Email
            </th>
            <th
              style={{
                border: "1px solid black",
                width: "50%",
                height: "40px",
              }}
            >
              <a href="https://mail.google.com/">ianpangestu082@gmail.com</a>
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
              Linkedin
            </th>
            <th
              style={{
                border: "1px solid black",
                width: "50%",
                height: "40px",
              }}
            >
              <a href="https://www.linkedin.com/in/ianpangestu/">@ianpangestu</a>
            </th>
          </tr>
        </table>
      </>
    );
  }
}
