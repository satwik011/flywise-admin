import React from 'react';
import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import PaymentsTable from './PaymentsTable';
import '../../styles/PaymentPage.css';

const PaymentPage = () => {
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
          />
        </div>
        {/**<div className='artist-addArtistDiv'>
          <button className='artist-addBtn'>
            <img src={addIcon} alt='add' className='artist-addIcon' />
            <span>Add artist</span>
          </button>
        </div> */}
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
        <PaymentsTable />
      </div>
    </div>
  );
};

export default PaymentPage;
