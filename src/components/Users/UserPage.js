import React, { useState, useEffect } from 'react';
// import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import UsersTable from './UsersTable';

import { getUserList } from '../../redux/api';

import '../../styles/UserPage.css';

const UserPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [boolVal, setBoolVal] = useState(false);

  const fetchUserList = async () => {
    try {
      const { data } = await getUserList();
      setAllUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchUserList();
      setBoolVal(true);
    }
  }, [boolVal]);

  return (
    <div className='user-container'>
      <div className='user-firstSection'>
        <div className='user-searchDiv'>
          <img src={searchIcon} alt='search' className='searchIcon' />
          <input
            type='text'
            placeholder='Ex. Users, Phone Number'
            className='user-searchInput'
            id='searchInput'
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
        <UsersTable allUsers={allUsers} />
      </div>
    </div>
  );
};

export default UserPage;
