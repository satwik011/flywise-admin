import React from 'react';
import '../../styles/AddArtistForm.css';

const ArtistSetPaymentMode = (props) => {
  const { page, setPage } = props;
  return (
    <div className='artist-setPaymentContainer'>
      <div className='artist-setPayment'>
        <h1 className='artist-setPaymentHeading'>Setup payment options</h1>
        <div className='artist-paymentOptionsDiv'>
          <div className='artist-paymentOption'>
            <input type='radio' name='bankAcount' className='artist-radioBtn' />
            <p className='artist-btnPara'>Enter Bank Account</p>
          </div>
          <div className='artist-paymentOption'>
            <input type='radio' name='upiId' className='artist-radioBtn' />
            <p className='artist-btnPara'>Enter UPI Id</p>
          </div>
        </div>
        <div className='artist-setPaymentBtnDiv'>
          <button
            className='artist-setPaymentBtn'
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistSetPaymentMode;
