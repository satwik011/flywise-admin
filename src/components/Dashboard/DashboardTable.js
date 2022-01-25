import React from 'react';
import '../../styles/ArtistsTable.css';

const DashboardTable = (props) => {
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Status</th>
            <th>Artist</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((row, i) => (
            <tr key={i}>
              <td>{`#2458`}</td>
              <td>{`Pending`}</td>
              <td>{`Dustin Wilson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`01/22/15 17:15`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
