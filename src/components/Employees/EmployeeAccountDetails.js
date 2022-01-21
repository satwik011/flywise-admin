import React, { Fragment, useState } from 'react';
import backTick from '../../images/backTick.png';
import '../../styles/AddEmployeeForm.css';

const EmployeeAccountDetails = (props) => {
  const { page, setPage } = props;
  const [show, setShow] = useState(false);
  return (
    <div className='employee-accountDetailsDiv'>
      {!show ? (
        <Fragment>
          <div className='employee-accountDetailHeader'>
            <button className='backBtnTick' onClick={() => setPage(page - 1)}>
              <img src={backTick} alt='back' className='backBtnIcon' />
            </button>
            <h1 className='employee-accountDetailHeading'>
              Add Payment Account
            </h1>
          </div>
          <div className='employee-accountFormDiv'>
            <div className='employee-accountInputDiv'>
              <label className='employee-accountInputLabel'>NAME</label>
              <input
                type='text'
                name='fullName'
                placeholder='Account holder name'
                className='employee-accountInput'
              />
            </div>
            <div className='employee-accountInputDiv'>
              <label className='employee-accountInputLabel'>ACCOUNT NO</label>
              <input
                type='text'
                name='fullName'
                placeholder='Account number'
                className='employee-accountInput'
              />
            </div>
            <div className='employee-accountInputDiv'>
              <label className='employee-accountInputLabel'>
                CONFIRM ACCOUNT NO
              </label>
              <input
                type='text'
                name='fullName'
                placeholder='Confirm account number'
                className='employee-accountInput'
              />
            </div>
            <div className='employee-accountInputDiv'>
              <label className='employee-accountInputLabel'>IFSC Code</label>
              <input
                type='text'
                name='fullName'
                placeholder='IFSC code'
                className='employee-accountInput'
              />
            </div>
            <div className='employee-submitAccountDiv'>
              <button
                className='employee-submitAccount'
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='employee-accountDetailHeader'>
            <button className='backBtnTick' onClick={() => setPage(page - 1)}>
              <img src={backTick} alt='back' className='backBtnIcon' />
            </button>
            <h1 className='employee-accountDetailHeading'>Add UPI ID</h1>
          </div>
          <div className='employee-accountFormDiv'>
            <div className='employee-accountInputDiv'>
              <label className='employee-accountInputLabel'>UPI ID</label>
              <input
                type='text'
                name='upi'
                placeholder='UPI ID'
                className='employee-accountInput'
              />
            </div>
            <div className='employee-submitAccountDiv'>
              <button
                className='employee-submitAccount'
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default EmployeeAccountDetails;
