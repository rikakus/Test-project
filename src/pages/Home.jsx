import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import data from "../data/user.json";
import withRouter from "../HOC/withRouter";

const { Search } = Input;
const { Title } = Typography;

const tabel = [
  {
    title: "Name",
    dataIndex: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    responsive: ["md"],
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Photo",
    dataIndex: "Photo",
    render: (foto) => (
      <Image
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        src={foto}
        alt="avatar"
      />
    ),
    responsive: ["lg"],
  },
  {
    title: "Action",
    dataIndex: "id",
    render: (id) => (
      <Link to={`/detail/${id}`}>
        <Button type="primary">Detail User</Button>
      </Link>
    ),
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      data: data,
    };

    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    if (this.props.search) {
      this.onSearch(this.props.search);
    }
    return;
  }

  onSearch(e) {
    this.setState({
      search: e,
    });
    const dataFiltered = data.filter((user) => {
      return user.username
        .toLowerCase()
        .includes(this.state.search.trim().toLowerCase());
    });

    this.setState({ data: dataFiltered });
    this.props.navigate(`/?search=${e}`);
  }

  render() {
    return (
      <div>
        <Title style={{ marginBottom: "2rem" }} level={3}>
          Home Page
        </Title>
        <Row justify="center">
          <Col span={18}>
            <Search
              placeholder="Search Name"
              allowClear
              enterButton="Search"
              size="large"
              onChange={(e) => {
                console.log(e);
                this.setState({ search: e.target.value });
              }}
              value={this.state.search}
              onSearch={this.onSearch}
            />
          </Col>
          <Divider />
          <Col>
            <Table columns={tabel} dataSource={this.state.data} rowKey="id" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Home);
