import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../../images/addIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import EmployeesTable from './allblogs/EmployeesTable';
import { getEmployeeList } from '../../redux/api';
import '../../styles/EmployeePage.css';

const BlogPage = () => {
  const history = useHistory();
  return (
    <div className='employee-container'>
          <div className='employee-firstSection'>
            <div className='employee-searchDiv'>
              <img src={searchIcon} alt='search' className='searchIcon' />
              <input
                type='text'
                placeholder="Search Author's Name"
                className='employee-searchInput'
                id='searchInput'
               
              />
            </div>
            <div className='employee-addEmployeeDiv'>
              <button
                className='employee-addBtn'
                onClick={() => history.push('/blog/add')}
              >
                <img src={addIcon} alt='add' className='employee-addIcon' />
                <span>Add Blogs</span>
              </button>
            </div>
          </div>
          <div className='employee-tableSection'>
            <EmployeesTable
            />
          </div>
     
    </div>
  );
};

export default BlogPage;
