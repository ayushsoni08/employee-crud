import React, { useState } from 'react';
import './EmployeeList.css';
import { Link } from 'react-router-dom';

const EmployeesList = () => {

  return (
    <>
      <h1 className='heading'>Employees</h1>
      <div className='container'>
        <table className='employeeTable'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>
                  <button className='add-btn'>
                    <Link className='link' to='/add-employee'>
                      Add +
                    </Link>
                  </button>
              </th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name"><Link to='/employee-detail' className='link'>Ayush</Link></td>
              <td dta-label="ID">08</td>
              <td data-label="action"><button className='delete-btn'>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EmployeesList;