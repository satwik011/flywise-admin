import React, { useEffect, useState } from 'react';
import { getPaymentList, appVisits, totalSubscriptions } from '../../redux/api';

const DashboardIncome = (props) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [totalAppVisits, setTotalAppVisits] = useState(0);
  const [totalSubscription, setTotalSubscription] = useState(0);
  const [boolVal, setBoolVal] = useState(false);

  const fetchTotalIncome = async () => {
    try {
      const { data } = await getPaymentList();
      let total = 0;
      data.forEach((d) => 
          total += parseInt(d.amount);
      });
      setTotalIncome(total);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWeeklyIncome = async () => {
    try {
      const { data } = await getPaymentList();
      let today = new Date();

      let before = new Date(today);
      before.setDate(today.getDate() - 6);
      let total = 0;
      data.forEach((d) => {
        if (new Date(d.createdAt).getTime() >= before) {
          total += parseInt(d.amount);
        }
      });
      setWeeklyIncome(total);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAppVisits = async () => {
    try {
      const { data } = await appVisits();
      setTotalAppVisits(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTotalSubscriptions = async () => {
    try {
      const { data } = await totalSubscriptions();
      setTotalSubscription(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchTotalIncome();
      fetchWeeklyIncome();
      fetchAppVisits();
      fetchTotalSubscriptions();
      setBoolVal(true);
    }
  }, [boolVal]);

  return (
    <div className='incomeCard-container'>
      <h3 className='incomeCard-title'>My Income</h3>
      <div className='cardDiv'>
        <div className='incomeCard-div'>
          <div className='incomeCard'>
            <div className='incomeCard-content'>
              <p className='income-label'>Total income</p>
              <h3 className='income-amount'>
                ₹ <span>{totalIncome}</span>
              </h3>
            </div>
            <div className='incomeCard-content'>
              <p className='income-label'>Weekly income</p>
              <h3 className='income-amount'>
                ₹ <span>{weeklyIncome}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className='users-div'>
          <div className='user-content'>
            <p className='user-numbers'>{totalAppVisits}</p>
            <p className='user-label'>Total no. of app visits</p>
          </div>
          <div className='user-content'>
            <p className='user-numbers'>{totalSubscription}</p>
            <p className='user-label'>Total no. of subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIncome;
