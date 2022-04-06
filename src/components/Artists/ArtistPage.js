import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../../images/addIcon.svg';
import axios from 'axios';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import ArtistsTable from './University/ArtistsTable';
import LoadingPage from '../utils/LoadingPage';
import { getArtistList } from '../../redux/api';

import '../../styles/ArtistPage.css';

const ArtistPage = () => {
  const history = useHistory();
  const [searchInput, setsearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [universityData, setuniversityData] = useState([])
  const [universityDataCopy, setUniversityDataCopy] = useState([])
  
  const unicall =async()=>{
    setLoading(true);
   
    try {
      const call1 = await axios.get("https://flywise-admin.herokuapp.com/api/allUni");
        setuniversityData(call1.data.allUni);
        setUniversityDataCopy(call1.data.allUni);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  }


  useEffect(() => {
    unicall();
  }, []);


  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    let originalData = {...universityData};

    let filteredData =  universityDataCopy.filter((item) => {  
      return item.name.includes(searchValue.replace(/\s+/g, '').toUpperCase())
      // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })

    if(filteredData.length > 0){
     setuniversityData(filteredData)
    }
    else {
      setuniversityData(universityData)
    }


  }
  console.log(searchInput)
  
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
                placeholder='Ex. Harvard University'
                className='artist-searchInput'
                id='searchInput'
                value={searchInput}
                onChange={(e)=>searchItems(e.target.value)}
              />
            </div>
            <div className='artist-addArtistDiv'>
              <button
                className='artist-addBtn'
                onClick={() => history.push('/universities/add')}
              >
                <img src={addIcon} alt='add' className='artist-addIcon' />
                <span>Add University</span>
              </button>
            </div>
        </div>
          <div className='artist-tableSection'>
            <ArtistsTable
            
                uniData={universityData}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ArtistPage;
