import React from 'react';
import './AddEmployee.css';

const AddEmployee = () => {
  return (
    <div className='container'>
        <h3 className='heading'>Add a new Employee</h3>
        <form action="">
            <input type="hidden" name="emp_id" id='emp_id' value='' />
            
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' placeholder='full name' required />
            </div>

            <div className='form-group'>
                <label htmlFor="address_line1">Address Line 1</label>
                <input type="text" id='address_line1' name='address_line1' placeholder='address' required />
            </div>
            <div className='form-group'>
                <label htmlFor="country">Country</label>
                <input type="text" id='country' name='country' placeholder='country' required />
            </div>
            <div className='form-group'>
                <label htmlFor="zip_code">Zip Code</label>
                <input type="text" id='zip_code' name='zip_code' placeholder='zip code' required />
            </div>

            <div className='contact-methods-container'>
                <div className='form-group contact-method-group'>
                    <label htmlFor="contact_method">Contact</label>
                    <select name="contact_method[]">
                        <option value="EMAIL">EMAIL</option>
                        <option value="PHONE">PHONE</option>
                    </select>
                    <input type="text" name='contact_value[]' placeholder='Enter value' required />
                </div>
            </div>

            <div className='form-group'>
                <button className='submit-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddEmployee