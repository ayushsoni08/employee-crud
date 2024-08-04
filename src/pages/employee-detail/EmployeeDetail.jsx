import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './EmployeeDetail.css'

const apiUrl = process.env.REACT_APP_COSMOCLOUD_BASE_URL;
const projectId = process.env.REACT_APP_PROJECT_ID;
const environmentId = process.env.REACT_APP_ENVIRONMENT_ID;

const EmployeeDetail = () => {

  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${id}`, {
        headers: {
          'projectId': projectId,
          'environmentId': environmentId,
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