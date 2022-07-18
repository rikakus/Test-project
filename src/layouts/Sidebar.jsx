import React, { Component } from "react";
import { Layout } from "antd";
import SideItem from "../components/SideItem";
import {
  UserOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Content,Sider } = Layout;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={(e) =>
            this.setState({
              collapsed: !this.state.collapsed,
            })
          }
        >
          <div className="logo" style={{ minHeight: "15vh" }}></div>
          <SideItem
            link="/"
            title="Home"
            icon={<HomeOutlined />}
            isCollapse={this.state.collapsed}
          />
          <SideItem
            link="/about"
            title="About"
            icon={<QuestionCircleOutlined />}
            isCollapse={this.state.collapsed}
          />
          <SideItem
            link="/contact"
            title="Contact"
            icon={<UserOutlined />}
            isCollapse={this.state.collapsed}
          />
        </Sider>
        <Layout>
          <Content
            style={{ padding: "20px", height: "100vh", overflow: "auto" }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
