import React from 'react';

const DashboardIncome = () => {
  return (
    <div className='incomeCard-container'>
      <h3 className='incomeCard-title'>My Income</h3>
      <div className='cardDiv'>
        <div className='incomeCard-div'>
          <div className='incomeCard'>
            <div className='incomeCard-content'>
              <p className='income-label'>Total income</p>
              <h3 className='income-amount'>
                ₹ <span>28500.75</span>
              </h3>
            </div>
            <div className='incomeCard-content'>
              <p className='income-label'>Weekly income</p>
              <h3 className='income-amount'>
                ₹ <span>18500.75</span>
              </h3>
            </div>
          </div>
        </div>
        <div className='users-div'>
          <div className='user-content'>
            <p className='user-numbers'>150,000</p>
            <p className='user-label'>Total no. of app visits</p>
          </div>
          <div className='user-content'>
            <p className='user-numbers'>10,000</p>
            <p className='user-label'>Total no. of subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIncome;
