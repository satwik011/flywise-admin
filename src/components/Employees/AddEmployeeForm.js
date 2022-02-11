import React, { useState } from 'react';
import EmployeePaymentMode from './EmployeePaymentMode';
import EmployeeAccountDetails from './EmployeeAccountDetails';
import CongratulationScreen from './CongratulationScreen';

import '../../styles/AddEmployeeForm.css';

const initialData = {
  username: '',
  phone: '',
  email: '',
  address: '',
  accountNo: '',
  ifscCode: '',
  upiId: '',
};

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [mode, setMode] = useState('account');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className='addEmployee-container'>
      {page === 1 && (
        <div className='addEmployee-personalDetails'>
          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Full Name</label>
              <input
                type='text'
                name='username'
                placeholder='Full Name'
                className='addEmployee-inputField'
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Contact Number</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                placeholder='Contact Number'
                className='addEmployee-inputField'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>E-mail</label>
              <input
                type='text'
                name='email'
                value={formData.email}
                placeholder='E-mail'
                className='addEmployee-inputField'
                onChange={handleChange}
              />
            </div>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Address</label>
              <input
                type='text'
                name='address'
                value={formData.address}
                placeholder='Address & Pincode'
                className='addEmployee-inputField'
                onChange={handleChange}
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
      {page === 2 && (
        <EmployeePaymentMode
          page={page}
          setPage={setPage}
          mode={mode}
          setMode={setMode}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {page === 3 && (
        <EmployeeAccountDetails
          page={page}
          setPage={setPage}
          mode={mode}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      )}
      {page === 4 && (
        <CongratulationScreen
          page={page}
          setPage={setPage}
          formData={formData}
        />
      )}
    </div>
  );
};

export default AddEmployeeForm;
