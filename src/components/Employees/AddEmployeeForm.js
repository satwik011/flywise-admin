import React, { useState } from 'react';
import EmployeePaymentMode from './EmployeePaymentMode';
import EmployeeAccountDetails from './EmployeeAccountDetails';
import CongratulationScreen from './CongratulationScreen';

import '../../styles/AddEmployeeForm.css';

const AddEmployeeForm = () => {
  const [page, setPage] = useState(1);
  return (
    <div className='addEmployee-container'>
      {page === 1 && (
        <div className='addEmployee-personalDetails'>
          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Full Name</label>
              <input
                type='text'
                name='fullName'
                placeholder='Full Name'
                className='addEmployee-inputField'
              />
            </div>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Contact Number</label>
              <input
                type='text'
                name='contactNumber'
                placeholder='Contact Number'
                className='addEmployee-inputField'
              />
            </div>
          </div>
          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>E-mail</label>
              <input
                type='text'
                name='email'
                placeholder='E-mail'
                className='addEmployee-inputField'
              />
            </div>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Address</label>
              <input
                type='text'
                name='address'
                placeholder='Address & Pincode'
                className='addEmployee-inputField'
              />
            </div>
          </div>
          <div className='addEmployee-submitDetailDiv'>
            <button
              className='addEmployee-submitDetailBtn'
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === 2 && <EmployeePaymentMode page={page} setPage={setPage} />}
      {page === 3 && <EmployeeAccountDetails page={page} setPage={setPage} />}
      {page === 4 && <CongratulationScreen page={page} setPage={setPage} />}
    </div>
  );
};

export default AddEmployeeForm;
