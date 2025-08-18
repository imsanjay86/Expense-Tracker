import React from 'react'
import { ExpenseProvider } from '../context/ExpenseContext'
import DashboardLayout from '../layouts/DashboardLayout';
import Dashbaord from '../Components/Dashbaord';

const Index = () => {
  return (
  <ExpenseProvider>
    <DashboardLayout>
      <Dashbaord />
    </DashboardLayout>
  </ExpenseProvider>
  );
};

export default Index;
