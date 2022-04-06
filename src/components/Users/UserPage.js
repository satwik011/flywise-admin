import React, { useState, useEffect, Fragment } from 'react';
// import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import UsersTable from './UsersTable';
import axios from 'axios';
import '../../styles/UserPage.css';
import LoadingPage from '../utils/LoadingPage';

const UserPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [boolVal, setBoolVal] = useState(false);
  const [searchInput, setsearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserList = async () => {
    setLoading(true);
    try {
      const userData = await axios.get("https://flywise-admin.herokuapp.com/api/allUsers");
      setAllUsers(userData.data.user);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };



  const searchItems = (searchValue) => {
    setsearchInput(searchValue)


    let filteredData =  allUsers.filter((item) => {  
      return item.name.includes(searchValue.replace(/\s+/g, ''))
      // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    })

    if(filteredData.length > 0){
     setAllUsers(filteredData)
    }
    else {
    }


  }

  useEffect(() => {
    if (!boolVal) {
      fetchUserList();
      setBoolVal(true);
    }
  }, [boolVal]);

  return (
    <div className='user-container'>
      {loading ? (
        <LoadingPage />
      ) : (
        <Fragment>
          <div className='user-firstSection'>
            <div className='user-searchDiv'>
              <img src={searchIcon} alt='search' className='searchIcon' />
              <input
                type='text'
                placeholder='Ex. Users, Phone Number'
                className='user-searchInput'
                id='searchInput'
                onChange={(e)=>searchItems(e.target.value)}
              />
            </div>
            {/**<div className='artist-addArtistDiv'>
          <button className='artist-addBtn'>
            <img src={addIcon} alt='add' className='artist-addIcon' />
            <span>Add artist</span>
          </button>
        </div> */}
            {/**<div className='user-printDiv'>
          <button className='user-addBtn'>
            <img src={printIcon} alt='print' className='user-printIcon' />
            <span>Print</span>
          </button>
        </div> */}
            <div className='user-filterDiv'>
              <button className='user-filterBtn'>
                <img src={filterIcon} alt='print' className='user-filterIcon' />
                <span>Filter</span>
              </button>
            </div>
          </div>
          <div className='user-tableSection'>
            <UsersTable Users = {allUsers} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default UserPage;
