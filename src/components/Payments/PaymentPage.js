import React, { useState, useEffect } from 'react';
import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import PaymentsTable from './PaymentsTable';
import '../../styles/PaymentPage.css';
import { getPaymentList } from '../../redux/api';

const PaymentPage = () => {
  const [allPayments, setAllPayments] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [boolVal, setBoolVal] = useState(false);

  const fetchPaymentList = async (searchInput) => {
    try {
      const { data } = await getPaymentList(searchInput);
      setAllPayments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchPaymentList(searchInput);
      setBoolVal(true);
    }
  }, [boolVal, searchInput]);

  return (
    <div className='payment-container'>
      <div className='payment-firstSection'>
        <div className='payment-searchDiv'>
          <img src={searchIcon} alt='search' className='searchIcon' />
          <input
            type='text'
            placeholder='Ex. Transaction ID, Credited to'
            className='payment-searchInput'
            id='searchInput'
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter' && fetchPaymentList(searchInput)
            }
          />
        </div>
        <div className='payment-printDiv'>
          <button className='payment-addBtn'>
            <img src={printIcon} alt='print' className='payment-printIcon' />
            <span>Print</span>
          </button>
        </div>
        <div className='payment-filterDiv'>
          <button className='payment-filterBtn'>
            <img src={filterIcon} alt='print' className='payment-filterIcon' />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className='payment-tableSection'>
        <PaymentsTable allPayments={allPayments} />
      </div>
    </div>
  );
};

export default PaymentPage;
