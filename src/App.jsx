import React from 'react';
import TopComponent from './TopComponent';
import VehicleManagementTable from './VehicleManagementComponent';

function App() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <TopComponent />
      <VehicleManagementTable />
    </div>
  );
}

export default App;