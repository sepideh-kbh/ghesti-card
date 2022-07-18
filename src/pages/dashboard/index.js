import React from "react";
import { Link } from "react-router-dom";
import data from 'utils/db.json';
import { Row, Col, Button } from 'antd';

const Dashboard = () => {
  return <Row>{data.map(item => <Col xs={24} xl={12}>
    <Button type="primary" key={item.path}>
      <Link to={`/${item.path}`} key={item.path}>
        {item.titleform}
      </Link>
    </Button>
  </Col>
  )}
  </Row>
}
export default Dashboard;