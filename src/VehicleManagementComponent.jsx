import React, { useState } from 'react';
import { Button, Table } from 'antd';

const dataSource = [
  {
    vehicleId: 132456,
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: 0,
    batteryLevel: 100,
    status: 'PARKING',
    location: '3.142,012',
    lastUpdated: '2019-07-02 9:00 AM',
  },
  {
    vehicleId: 987654,
    type: 'Scooter',
    lockUnlock: 'Unlock',
    currentSpeed: 5,
    batteryLevel: 75,
    status: 'MOVING',
    location: '2.125,114',
    lastUpdated: '2019-07-02 10:00 AM',
  },
  {
    vehicleId: 569825,
    type: 'Scooter',
    lockUnlock: 'Unlock',
    currentSpeed: 0,
    batteryLevel: 50,
    status: 'IDLING',
    location: '4.125,114',
    lastUpdated: '2019-07-02 10.00AM',
  },
  {
    vehicleId: 125864,
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: 5,
    batteryLevel: 15,
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10.00AM',
  },
  {
    vehicleId: 125864,
    type: 'Scooter',
    lockUnlock: 'Lock',
    currentSpeed: 5,
    batteryLevel: 0,
    status: 'TOWING',
    location: '5.125,114',
    lastUpdated: '2019-07-02 10.00AM',
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'index',
    key: 'index',
    render: (text, record, index) => index + 1,
  },
  {
    title: 'Vehicle ID',
    dataIndex: 'vehicleId',
    key: 'vehicleId',
    sorter: (a, b) => a.vehicleId - b.vehicleId,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: (a, b) => a.type.localeCompare(b.type),
  },
  {
    title: 'Lock/Unlock',
    dataIndex: 'lockUnlock',
    key: 'lockUnlock',
    render: (text) => (text === 'Lock' ? <span style={{ color: 'red' }}>Lock</span> : 'Unlock'),
    sorter: (a, b) => a.lockUnlock.localeCompare(b.lockUnlock),
  },
  {
    title: 'Current Speed',
    dataIndex: 'currentSpeed',
    key: 'currentSpeed',
    render: (text) => `${text} km/h`,
    sorter: (a, b) => a.currentSpeed - b.currentSpeed,
  },
  {
    title: 'Battery Level',
    dataIndex: 'batteryLevel',
    key: 'batteryLevel',
    render: (text) => `${text}%`,
    sorter: (a, b) => a.batteryLevel - b.batteryLevel,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => `${text}`,
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: (text) => `${text}`,
    sorter: (a, b) => {
      const aCoords = a.location.split(',');
      const bCoords = b.location.split(',');
      return aCoords[0] - bCoords[0] || aCoords[1] - bCoords[1];
    }
    
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    key: 'lastUpdated',
    render: (text) => `${text}`,
    sorter: (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated),
  },
];

function VehicleManagementTable() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 16px' }}>
        <Button style={{ backgroundColor: '#7bdbab' }}>+ New Vehicle</Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default VehicleManagementTable;