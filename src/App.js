import EmployeesList from './pages/employee-list/EmployeesList';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/add-employee/AddEmployee';
import EmployeeDetail from './pages/employee-detail/EmployeeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<EmployeesList />} />
        <Route exact path='/add-employee' element={<AddEmployee />} />
        <Route exact path='/employee/:id' element={<EmployeeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
