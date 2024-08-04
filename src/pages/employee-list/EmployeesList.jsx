import React, { useEffect, useState } from "react";
import "./EmployeeList.css";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = process.env.REACT_APP_COSMOCLOUD_BASE_URL;
const projectId = process.env.REACT_APP_PROJECT_ID;
const environmentId = process.env.REACT_APP_ENVIRONMENT_ID;

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://free-ap-south-1.cosmocloud.io/development/api/employee",
        {
          headers: {
            projectId: "66ade3045981a392dc2bb38b",
            environmentId: "66ade3045981a392dc2bb38c",
          },
          params: {
            limit: 10,
            offset: 0,
          },
        }
      );

      if (response.data && Array.isArray(response.data.data)) {
        setEmployees(response.data.data);
      } else {
        console.error("API did not return an array:", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    const url = `${apiUrl}/${id}`;
    
    try {
      const response = await axios.delete(url, {
        headers: {
          'projectId': projectId,
          'environmentId': environmentId,
        },
        data: {},
      });
      console.log('Delete response:', response.data);

      // Remove the deleted employee from the state
      setEmployees(employees.filter(employee => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <h1 className="heading">Employees</h1>
      <div className="container">
        {employees.length === 0 ?
          (
            <p>No Employees in the system.</p>
          ) : (

            employees && (
              <table className="employeeTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>
                      <button className="add-btn">
                        <Link className="link" to="/add-employee">
                          Add +
                        </Link>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees?.map((employee) => (
                    <tr key={employee._id}>
                      <td>
                        <Link className="link" to={`/employee/${employee._id}`}>
                          {employee.name}
                        </Link>
                      </td>
                      <td>{employee._id}</td>
                      <td data-label="action">
                        <button
                          className="delete-btn"
                          onClick={() => deleteEmployee(employee._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
            {employees.length > 10 && 
              <button className="load-btn" onClick={() => setOffset(offset + limit)}>Load more</button>
            }
      </div>
    </>
  );
};

export default EmployeesList;
