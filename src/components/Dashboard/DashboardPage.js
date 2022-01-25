import React from 'react';
import DashboardTable from './DashboardTable';
import DashboardIncome from './DashboardIncome';
import DashboardGraph from './DashboardGraph';
import downloadIcon from '../../images/downloadIcon.svg';
import printIcon from '../../images/printIcon.svg';
import filterIcon from '../../images/filterIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import '../../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-cards'>
        <DashboardIncome />
        <DashboardGraph />
      </div>
      <div className='dashboard-firstSection'>
        <div className='dashboard-searchDiv'>
          <img src={searchIcon} alt='search' className='searchIcon' />
          <input
            type='text'
            placeholder='Ex. Order No, Artist'
            className='dashboard-searchInput'
            id='searchInput'
          />
        </div>
        <div className='dashboard-downloadDiv'>
          <button className='dashboard-downloadBtn'>
            <img
              src={downloadIcon}
              alt='download'
              className='dashboard-downloadIcon'
            />
            <span>Download</span>
          </button>
        </div>
        <div className='dashboard-printDiv'>
          <button className='dashboard-downloadBtn'>
            <img src={printIcon} alt='print' className='dashboard-printIcon' />
            <span>Print</span>
          </button>
        </div>
        <div className='dashboard-filterDiv'>
          <button className='dashboard-filterBtn'>
            <img
              src={filterIcon}
              alt='print'
              className='dashboard-filterIcon'
            />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className='dashboard-tableSection'>
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashboardPage;
