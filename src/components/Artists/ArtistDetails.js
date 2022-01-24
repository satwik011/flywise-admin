import React, { useState, useEffect, Fragment } from 'react';
import ArtistOrdersTable from './ArtistOrdersTable';
import { getAnArtist } from '../../redux/api';
import artistProfile from '../../images/artistProfile.png';
import editIcon from '../../images/editIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import '../../styles/ArtistDetails.css';

const ArtistDetails = (props) => {
  const [artistData, setArtistData] = useState({});
  const [boolVal, setBoolVal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const id = props.match.params.id;

  const fetchArtist = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await getAnArtist(id);
      console.log(data);
      setArtistData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchArtist(id);
      setBoolVal(true);
    }
  }, [boolVal, id]);

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
                  src={artistProfile}
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
                  <button className='artistDetails-leftBtns'>
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
                <button className='artistDetails-rightBtn block'>Block</button>
                <button className='artistDetails-rightBtn delete'>
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
                <p className='artistDetails-income'>Rs 25000/-</p>
              </div>
            </div>
            <div className='artistDetails-incomeCardDiv'>
              <p className='artistDetails-incomeCardLabel'>Weekly Income</p>
              <div className='artistDetails-incomeCard'>
                <h3 className='artistDetails-incomeCardTitle'>Weekly Income</h3>
                <p className='artistDetails-income'>Rs 25000/-</p>
              </div>
            </div>
            <div className='artistDetails-ordersDiv'>
              <h4 className='artistDetails-orderTitle'>Total Orders</h4>
              <p className='artistDetails-order'>100</p>
            </div>
            <div className='artistDetails-ordersDiv'>
              <h4 className='artistDetails-orderTitle'>Pending Orders</h4>
              <p className='artistDetails-order'>10</p>
            </div>
          </div>
          <div className='artistDetails-tableSection'>
            <ArtistOrdersTable />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArtistDetails;
