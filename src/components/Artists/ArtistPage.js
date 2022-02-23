import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../../images/addIcon.svg';
// import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import ArtistsTable from './ArtistsTable';
import LoadingPage from '../utils/LoadingPage';
import { getArtistList } from '../../redux/api';

import '../../styles/ArtistPage.css';

const ArtistPage = () => {
  const history = useHistory();
  const [allArtists, setAllArtists] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [boolVal, setBoolVal] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchArtistList = async (searchInput) => {
    setLoading(true);
    try {
      const { data } = await getArtistList(searchInput);
      // console.log(data);
      setAllArtists(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchArtistList(searchInput);
      setBoolVal(true);
    }
  }, [boolVal, searchInput]);

  return (
    <div className='artist-container'>
      {loading ? (
        <LoadingPage />
      ) : (
        <Fragment>
          <div className='artist-firstSection'>
            <div className='artist-searchDiv'>
              <img src={searchIcon} alt='search' className='searchIcon' />
              <input
                type='text'
                placeholder='Ex. Artist'
                className='artist-searchInput'
                id='searchInput'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && fetchArtistList(searchInput)
                }
              />
            </div>
            <div className='artist-addArtistDiv'>
              <button
                className='artist-addBtn'
                onClick={() => history.push('/artists/add')}
              >
                <img src={addIcon} alt='add' className='artist-addIcon' />
                <span>Add artist</span>
              </button>
            </div>
            <div className='artist-addArtistDiv'>
              <button
                className='artist-addBtn'
                onClick={() => history.push('/artists/addaccount')}
              >
                <img src={addIcon} alt='add' className='artist-addIcon' />
                <span>Add Account</span>
              </button>
            </div>
          </div>
          <div className='artist-tableSection'>
            <ArtistsTable
              allArtists={allArtists}
              fetchArtistList={fetchArtistList}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArtistPage;
