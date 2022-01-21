import React from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../../images/addIcon.svg';
import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import ArtistsTable from './ArtistsTable';
import '../../styles/ArtistPage.css';

const ArtistPage = () => {
  const history = useHistory();
  return (
    <div className='artist-container'>
      <div className='artist-firstSection'>
        <div className='artist-searchDiv'>
          <img src={searchIcon} alt='search' className='searchIcon' />
          <input
            type='text'
            placeholder='Ex. Order No, Artist'
            className='artist-searchInput'
            id='searchInput'
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
        <div className='artist-printDiv'>
          <button className='artist-addBtn'>
            <img src={printIcon} alt='print' className='artist-printIcon' />
            <span>Print</span>
          </button>
        </div>
        <div className='artist-filterDiv'>
          <button className='artist-filterBtn'>
            <img src={filterIcon} alt='print' className='artist-filterIcon' />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className='artist-tableSection'>
        <ArtistsTable />
      </div>
    </div>
  );
};

export default ArtistPage;
