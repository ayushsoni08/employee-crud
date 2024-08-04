import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './EmployeeDetail.css'

const EmployeeDetail = () => {

  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`, {
        headers: {
          'projectId': '66ade3045981a392dc2bb38b',
          'environmentId': '66ade3045981a392dc2bb38c',
        }
      });
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!employee) {
    return <div>Loading..</div>
  }

  return (
    <div className='detail-container'>
      <h1>{employee.name}</h1>
      <p>{employee.email}</p>
      <p>ID: {employee._id}</p>
      <p>Address: {employee.address_line1}, {employee.country} - {employee.zip_code}</p>
    </div>
  )
}

export default EmployeeDetail