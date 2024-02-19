import React from 'react';
import EnhancedTable from './components/Table';
import Header from './components/Header';
import TablePage from './Pages/TablePage';
import "./App.css"

const App = () => {
  return (
    <div className='bgc'>
      <TablePage/>
      <Header/>
      <EnhancedTable />
    </div>
  );
};

export default App;
