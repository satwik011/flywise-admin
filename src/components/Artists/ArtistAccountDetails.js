import React, { Fragment, useState } from 'react';
import backTick from '../../images/backTick.png';
import '../../styles/AddArtistForm.css';

const ArtistAccountDetails = (props) => {
  const { page, setPage } = props;
  const [show, setShow] = useState(false);
  return (
    <div className='artist-accountDetailsDiv'>
      {!show ? (
        <Fragment>
          <div className='artist-accountDetailHeader'>
            <button className='backBtnTick' onClick={() => setPage(page - 1)}>
              <img src={backTick} alt='back' className='backBtnIcon' />
            </button>
            <h1 className='artist-accountDetailHeading'>Add Payment Account</h1>
          </div>
          <div className='artist-accountFormDiv'>
            <div className='artist-accountInputDiv'>
              <label className='artist-accountInputLabel'>NAME</label>
              <input
                type='text'
                name='fullName'
                placeholder='Account holder name'
                className='artist-accountInput'
              />
            </div>
            <div className='artist-accountInputDiv'>
              <label className='artist-accountInputLabel'>ACCOUNT NO</label>
              <input
                type='text'
                name='fullName'
                placeholder='Account number'
                className='artist-accountInput'
              />
            </div>
            <div className='artist-accountInputDiv'>
              <label className='artist-accountInputLabel'>
                CONFIRM ACCOUNT NO
              </label>
              <input
                type='text'
                name='fullName'
                placeholder='Confirm account number'
                className='artist-accountInput'
              />
            </div>
            <div className='artist-accountInputDiv'>
              <label className='artist-accountInputLabel'>IFSC Code</label>
              <input
                type='text'
                name='fullName'
                placeholder='IFSC code'
                className='artist-accountInput'
              />
            </div>
            <div className='artist-submitAccountDiv'>
              <button
                className='artist-submitAccount'
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='artist-accountDetailHeader'>
            <button className='backBtnTick' onClick={() => setPage(page - 1)}>
              <img src={backTick} alt='back' className='backBtnIcon' />
            </button>
            <h1 className='artist-accountDetailHeading'>Add UPI ID</h1>
          </div>
          <div className='artist-accountFormDiv'>
            <div className='artist-accountInputDiv'>
              <label className='artist-accountInputLabel'>UPI ID</label>
              <input
                type='text'
                name='upi'
                placeholder='UPI ID'
                className='artist-accountInput'
              />
            </div>
            <div className='artist-submitAccountDiv'>
              <button
                className='artist-submitAccount'
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

export default ArtistAccountDetails;
