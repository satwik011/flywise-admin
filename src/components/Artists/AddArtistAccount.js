import React, { useState, useEffect } from 'react';
import { getArtistList } from '../../redux/api';
import backTick from '../../images/backTick.png';
import { Fragment } from 'react';
import LoadingPage from '../utils/LoadingPage';

const initialState = {
  accountNo: '',
  ifscCode: '',
  upiId: '',
  artistId: '',
};

const AddArtistAccount = () => {
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState('account');
  const [artistList, setArtistList] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [boolVal, setBoolVal] = useState(false);

  const fetchArtistList = async () => {
    setLoading(true);
    try {
      const { data } = await getArtistList();
      console.log(data);
      setArtistList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Something went wrong, please try later!');
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchArtistList();
      setBoolVal(true);
    }
  }, [boolVal]);

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className='addArtist-container '>
      <Fragment>
        {page === 1 && (
          <div className='artist-setPaymentContainer'>
            <div className='artist-setCommissionDiv'>
              <div className='artist-commissionHeader'>
                <button
                  className='backBtnTick'
                  onClick={() => setPage(page - 1)}
                >
                  <img src={backTick} alt='back' className='backBtnIcon' />
                </button>
                <h3 className='artist-setCommissionHead'>Select Artist *</h3>
              </div>
              <div className='artist-commissionInputDiv'>
                <select
                  className='addArtist-selectField'
                  name='artistId'
                  value={formData.artistId}
                  onChange={handleChange}
                >
                  <option value='' selected={formData.artistId === ''}>
                    No select
                  </option>
                  {artistList?.map((artist) => (
                    <option value={artist.artistId}>{artist.artistName}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='artist-setPayment'>
              <div className='artist-setPaymentHeader'>
                {/**<button className='backBtnTick' onClick={() => setPage(page - 1)}>
              <img src={backTick} alt='back' className='backBtnIcon' />
            </button> */}
                <h1 className='artist-setPaymentHeading'>
                  Setup payment options
                </h1>
              </div>
              <div className='artist-paymentOptionsDiv'>
                <div className='artist-paymentOption'>
                  <input
                    type='radio'
                    name='bankAcount'
                    className='artist-radioBtn'
                    checked={mode === 'account'}
                    onChange={() => setMode('account')}
                  />
                  <p className='artist-btnPara'>Enter Bank Account</p>
                </div>
                <div className='artist-paymentOption'>
                  <input
                    type='radio'
                    name='upiId'
                    className='artist-radioBtn'
                    checked={mode === 'upi'}
                    onChange={() => setMode('upi')}
                  />
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
        )}
      </Fragment>
      {loading && <LoadingPage />}
    </div>
  );
};

export default AddArtistAccount;
