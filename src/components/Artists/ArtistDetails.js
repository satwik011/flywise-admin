import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ArtistOrdersTable from './ArtistOrdersTable';
import {
  getAnArtist,
  blockAndUnBlockArtist,
  deleteAnArtist,
  totalAndPendingOrdersForArtist,
  allPaymentForArtist,
  EditArtist,
} from '../../redux/api';
// import artistProfile from '../../images/artistProfile.png';
import editIcon from '../../images/editIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import '../../styles/ArtistDetails.css';

const ArtistDetails = (props) => {
  const history = useHistory();
  const [artistData, setArtistData] = useState({});
  const [orderData, setOrderData] = useState({
    totalOrders: 0,
    pendingOrders: 0,
  });
  const [paymentList, setPaymentList] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [boolVal, setBoolVal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const id = props.match.params.id;

  const fetchArtist = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await getAnArtist(id);
      setArtistData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchTotalOrdersAndPending = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await totalAndPendingOrdersForArtist(id);
      setOrderData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchTotalIncome = async (id) => {
    try {
      const { data } = await allPaymentForArtist(id);
      // console.log(data);
      setPaymentList(data);
      let total = 0;
      data.forEach((d) => {
        if (d.status === 'completed') {
          total += parseInt(d.amount);
        }
      });
      setTotalIncome(total);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWeeklyIncome = async (id) => {
    try {
      const { data } = await allPaymentForArtist(id);
      let today = new Date();

      let before = new Date(today);
      before.setDate(today.getDate() - 6);
      let total = 0;
      data.forEach((d) => {
        if (
          d.status === 'completed' &&
          new Date(d.createdAt).getTime() >= before
        ) {
          total += parseInt(d.amount);
        }
      });
      setWeeklyIncome(total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchArtist(id);
      fetchTotalOrdersAndPending(id);
      fetchTotalIncome(id);
      fetchWeeklyIncome(id);
      setBoolVal(true);
    }
  }, [boolVal, id]);

  const blockOrUnblock = async () => {
    try {
      await blockAndUnBlockArtist(id);
      fetchArtist(id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArtist = async () => {
    try {
      await deleteAnArtist(id);
      history.push('/artists');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      const { data } = await EditArtist(id);
      // window.localStorage.setItem('fanstarToken', data);
      window.open(
        `https://fanstar-app.netlify.app/artist/landing/${data}`,
        '_blank'
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='artistDetails-container'>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Fragment>
          <div className='artistDetails-personalInfoDiv'>
            <div className='artistDetails-leftDiv'>
              <div className='artistDetails-imageDiv'>
                <img
                  src={artistData.profilePhoto}
                  alt='profilePic'
                  className='artistDetails-image'
                />
              </div>
              <div className='artistDetails-infoDiv'>
                <p className='artistDetails-infoPara'>
                  {artistData.username ? artistData.username : ''},{' '}
                  <span className='artistDetails-infoSpan'>
                    {artistData.gender ? artistData.gender : ''}
                  </span>
                </p>
                <p className='artistDetails-infoPara'>
                  {artistData.phone ? artistData.phone : ''}
                </p>
                <p className='artistDetails-infoPara'>
                  {artistData.email ? artistData.email : ''}
                </p>
                <div className='artistDetails-leftBtnDiv'>
                  <button
                    className='artistDetails-leftBtns'
                    onClick={handleEdit}
                  >
                    Edit
                    <img src={editIcon} alt='edit' className='iconBtn' />
                  </button>
                  <button className='artistDetails-leftBtns'>
                    Share
                    <img src={shareIcon} alt='edit' className='iconBtn' />
                  </button>
                </div>
              </div>
            </div>
            <div className='artistDetails-rightDiv'>
              <div className='artistDetails-rightBtnDiv'>
                <button
                  className='artistDetails-rightBtn block'
                  onClick={blockOrUnblock}
                >
                  {artistData.blocked ? 'Unblock' : 'Block'}
                </button>
                <button
                  className='artistDetails-rightBtn delete'
                  onClick={deleteArtist}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          <div className='artistDetails-incomeSection'>
            <div className='artistDetails-incomeCardDiv'>
              <p className='artistDetails-incomeCardLabel'>Total Income</p>
              <div className='artistDetails-incomeCard'>
                <h3 className='artistDetails-incomeCardTitle'>Total Income</h3>
                <p className='artistDetails-income'>{`Rs ${totalIncome}/-`}</p>
              </div>
            </div>
            <div className='artistDetails-incomeCardDiv'>
              <p className='artistDetails-incomeCardLabel'>Weekly Income</p>
              <div className='artistDetails-incomeCard'>
                <h3 className='artistDetails-incomeCardTitle'>Weekly Income</h3>
                <p className='artistDetails-income'>{`Rs ${weeklyIncome}/-`}</p>
              </div>
            </div>
            <div className='artistDetails-ordersDiv'>
              <h4 className='artistDetails-orderTitle'>Total Orders</h4>
              <p className='artistDetails-order'>{orderData.totalOrders}</p>
            </div>
            <div className='artistDetails-ordersDiv'>
              <h4 className='artistDetails-orderTitle'>Pending Orders</h4>
              <p className='artistDetails-order'>{orderData.pendingOrders}</p>
            </div>
          </div>
          <div className='artistDetails-tableSection'>
            <ArtistOrdersTable paymentList={paymentList} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArtistDetails;
