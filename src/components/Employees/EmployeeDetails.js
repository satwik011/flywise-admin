import React from 'react';
import EmployeeOrdersTable from './EmployeeOrdersTable';
import demoProfile from '../../images/demoProfile.png';
import '../../styles/EmployeeDetails.css';

const EmployeeDetails = () => {
  return (
    <div className='employeeDetails-container'>
      <div className='employeeDetails-personalInfoDiv'>
        <div className='employeeDetails-leftDiv'>
          <div className='employeeDetails-imageDiv'>
            <img
              src={demoProfile}
              alt='profilePic'
              className='employeeDetails-image'
            />
          </div>
          <div className='employeeDetails-infoDiv'>
            <p className='employeeDetails-infoPara'>
              Shrvan Kumar,{' '}
              <span className='employeeDetails-infoSpan'>Male</span>
            </p>
            <p className='employeeDetails-infoPara'>98123456723</p>
            <p className='employeeDetails-infoPara'>xyz@gmail.com</p>
            {/**<div className='employeeDetails-leftBtnDiv'>
              <button className='employeeDetails-leftBtns'>
                Edit
                <img src={editIcon} alt='edit' className='iconBtn' />
              </button>
              <button className='employeeDetails-leftBtns'>
                Share
                <img src={shareIcon} alt='edit' className='iconBtn' />
              </button>
            </div> */}
          </div>
        </div>
        <div className='employeeDetails-rightDiv'>
          <div className='employeeDetails-rightBtnDiv'>
            <button className='employeeDetails-rightBtn block'>Block</button>
            <button className='employeeDetails-rightBtn delete'>
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <div className='employeeDetails-incomeSection'>
        <div className='employeeDetails-incomeCardDiv'>
          <p className='employeeDetails-incomeCardLabel'>Total Income</p>
          <div className='employeeDetails-incomeCard'>
            <h3 className='employeeDetails-incomeCardTitle'>Total Income</h3>
            <p className='employeeDetails-income'>Rs 25000/-</p>
          </div>
        </div>
        <div className='employeeDetails-incomeCardDiv'>
          <p className='employeeDetails-incomeCardLabel'>Weekly Income</p>
          <div className='employeeDetails-incomeCard'>
            <h3 className='employeeDetails-incomeCardTitle'>Weekly Income</h3>
            <p className='employeeDetails-income'>Rs 25000/-</p>
          </div>
        </div>
        <div className='employeeDetails-ordersDiv'>
          <h4 className='employeeDetails-orderTitle'>Total Artists</h4>
          <p className='employeeDetails-order'>100</p>
        </div>
        <div className='employeeDetails-ordersDiv'>
          <h4 className='employeeDetails-orderTitle'>Total Orders</h4>
          <p className='employeeDetails-order'>80</p>
        </div>
      </div>
      <div className='employeeDetails-tableSection'>
        <EmployeeOrdersTable />
      </div>
    </div>
  );
};

export default EmployeeDetails;
