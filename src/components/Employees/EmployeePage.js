import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import addIcon from '../../images/addIcon.svg';
// import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import EmployeesTable from './EmployeesTable';

import { getEmployeeList } from '../../redux/api';

import '../../styles/EmployeePage.css';
import LoadingPage from '../utils/LoadingPage';
import { Fragment } from 'react';

const EmployeePage = () => {
  const history = useHistory();
  const [allEmployees, setAllEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [boolVal, setBoolVal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEmployeeList = async (searchInput) => {
    setLoading(true);
    try {
      const { data } = await getEmployeeList(searchInput);
      setAllEmployees(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchEmployeeList(searchInput);
      setBoolVal(true);
    }
  }, [boolVal, searchInput]);

  return (
    <div className='employee-container'>
      {loading ? (
        <LoadingPage />
      ) : (
        <Fragment>
          <div className='employee-firstSection'>
            <div className='employee-searchDiv'>
              <img src={searchIcon} alt='search' className='searchIcon' />
              <input
                type='text'
                placeholder='Ex. Employee'
                className='employee-searchInput'
                id='searchInput'
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && fetchEmployeeList(searchInput)
                }
              />
            </div>
            <div className='employee-addEmployeeDiv'>
              <button
                className='employee-addBtn'
                onClick={() => history.push('/employees/add')}
              >
                <img src={addIcon} alt='add' className='employee-addIcon' />
                <span>Add employee</span>
              </button>
            </div>
            {/**<div className='employee-printDiv'>
          <button className='employee-addBtn'>
            <img src={printIcon} alt='print' className='employee-printIcon' />
            <span>Print</span>
          </button>
        </div> */}
            {/* <div className='employee-filterDiv'>
              <button className='employee-filterBtn'>
                <img
                  src={filterIcon}
                  alt='print'
                  className='employee-filterIcon'
                />
                <span>Filter</span>
              </button>
            </div> */}
            <div className='employee-addEmployeeDiv'>
              <button
                className='employee-addBtn'
                onClick={() => history.push('/employees/addaccount')}
              >
                <img src={addIcon} alt='add' className='employee-addIcon' />
                <span>Add Account</span>
              </button>
            </div>
          </div>
          <div className='employee-tableSection'>
            <EmployeesTable
              allEmployees={allEmployees}
              fetchEmployeeList={fetchEmployeeList}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default EmployeePage;
