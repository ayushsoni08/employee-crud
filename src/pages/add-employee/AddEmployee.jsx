import React, { useState } from 'react';
import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_COSMOCLOUD_BASE_URL;
const projectId = process.env.REACT_APP_PROJECT_ID;
const environmentId = process.env.REACT_APP_ENVIRONMENT_ID;

const AddEmployee = () => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        address_line1: '',
        country: '',
        zip_code: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const validateEmployeeData = () => {
        const { name, email, address_line1, country, zip_code } = employee;
        if (!name || !email || !address_line1 || !country || !zip_code) 
            return false;

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmployeeData()) {
            console.log("Invalid employee data: ", employee);
            return;
        }

        try {
            const res = await axios.post(
                apiUrl,
                employee,
                {
                    headers: {
                        'projectId': projectId,
                        'environmentId': environmentId,
                    }
                }
            );
            navigate('/');
            
        } catch (error) {
            console.error('Error Creating Employee:', error.response ? error.response.data : error.message);
        }
    }
    
    return (
        <div className='container'>
            <h3 className='heading'>Add a new Employee</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='full name' 
                        value={employee.name}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder='email' 
                        value={employee.email}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="address_line1">Address Line 1</label>
                    <input 
                        type="text" 
                        id='address_line1' 
                        name='address_line1' 
                        placeholder='address' 
                        value={employee.address_line1}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="country">Country</label>
                    <input 
                        type="text" 
                        id='country' 
                        name='country' 
                        placeholder='country' 
                        value={employee.country}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="zip_code">Zip Code</label>
                    <input 
                        type="text" 
                        id='zip_code' 
                        name='zip_code' 
                        placeholder='zip code' 
                        value={employee.zip_code}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className='form-group'>
                    <button type='submit' className='submit-btn'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;
