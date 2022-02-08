import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { payToArtist } from '../../redux/api';
import '../../styles/ArtistPayment.css';

const ArtistPayment = (props) => {
  const history = useHistory();
  const [amount, setAmount] = useState(0);
  const state = props.location.state;
  const id = props.match.params.id;
  if (!state) {
    history.push(`/artists/detail/${id}`);
  }

  const handleChange = (e) => {
    if (
      parseInt(state.requests[state.requests.length - 1].amount) >=
      e.target.value
    ) {
      setAmount(e.target.value);
    }
  };

  const handlePay = async () => {
    try {
      await payToArtist({
        withdrawId: state.requests[state.requests.length - 1]._id,
        amount: amount,
      });
      alert('Amount Paid!');
      history.push(`/artists/detail/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='artistPay-container'>
      <h3 className='artistPay-heading'>{`Pay to ${state.artistName}`}</h3>
      <p className='artistPay-content'>Payment requested</p>
      <p className='artistPay-amount'>
        {`Rs ${state.requests[state.requests.length - 1].amount}/-`}
      </p>
      <input
        type='number'
        min='0'
        max={parseInt(state.requests[state.requests.length - 1].amount)}
        onChange={handleChange}
        className='artistPay-inputField'
        value={amount}
        placeholder='Ex. 500'
      />
      <button className='artistPay-btn' onClick={handlePay}>
        Pay
      </button>
    </div>
  );
};

export default ArtistPayment;
