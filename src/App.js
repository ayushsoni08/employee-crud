import EmployeesList from './pages/EmployeesList';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/add-employee/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<EmployeesList />} />
        <Route exact path='/add-employee' element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
