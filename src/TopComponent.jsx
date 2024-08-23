import React from 'react';
import { Layout, Typography, Button } from 'antd';
import './TopComp.css';

const { Header } = Layout;
const { Title } = Typography;

const TopComponent = () => {
  return (
    <Header style={{backgroundColor: '#7bdbab', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
      <Title level={3}>Vehicle Management</Title>
      {/* <Button type="primary">New Vehicle</Button> */}
    </Header>
  );
};

export default TopComponent;