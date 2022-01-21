import React, { useState } from 'react';
import ArtistSetPaymentMode from './ArtistSetPaymentMode';
import ArtistAccountDetails from './ArtistAccountDetails';
import '../../styles/AddArtistForm.css';
import CongratulationScreen from './CongratulationScreen';

const AddArtistForm = () => {
  const [page, setPage] = useState(1);
  return (
    <div className='addArtist-container'>
      {page === 1 && (
        <div className='addArtist-personalDetails'>
          <div className='addArtist-alignRow'>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>Full Name</label>
              <input
                type='text'
                name='fullName'
                placeholder='Full Name'
                className='addArtist-inputField'
              />
            </div>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>Contact Number</label>
              <input
                type='text'
                name='contactNumber'
                placeholder='Contact Number'
                className='addArtist-inputField'
              />
            </div>
          </div>
          <div className='addArtist-alignRow'>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>E-mail</label>
              <input
                type='text'
                name='email'
                placeholder='E-mail'
                className='addArtist-inputField'
              />
            </div>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>Address</label>
              <input
                type='text'
                name='address'
                placeholder='Address & Pincode'
                className='addArtist-inputField'
              />
            </div>
          </div>
          <div className='addArtist-alignRow'>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>App Name</label>
              <input
                type='text'
                name='appName'
                placeholder='App Name'
                className='addArtist-inputField'
              />
            </div>
            <div className='addArtist-inputFieldDiv'>
              <label className='addArtist-inputLabel'>Employee Assigned</label>
              <input
                type='text'
                name='employee'
                placeholder='Employee Assigned'
                className='addArtist-inputField'
              />
            </div>
          </div>
          <div className='addArtist-alignRow'>
            <div className='addArtist-selectFieldDiv'>
              <label className='addArtist-inputLabel'>Services</label>
              <select className='addArtist-selectField' name='services'>
                <option value='service1'>Service 1</option>
                <option value='service2'>Service 2</option>
                <option value='service3'>Service 3</option>
              </select>
            </div>
          </div>
          <div className='addArtist-submitDetailDiv'>
            <button
              className='addArtist-submitDetailBtn'
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === 2 && <ArtistSetPaymentMode page={page} setPage={setPage} />}
      {page === 3 && <ArtistAccountDetails page={page} setPage={setPage} />}
      {page === 4 && <CongratulationScreen page={page} setPage={setPage} />}
    </div>
  );
};

export default AddArtistForm;
