import React from 'react';
import '../../styles/ArtistsTable.css';

const EmployeeOrdersTable = () => {
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Location</th>
            <th>Total Income</th>
            <th>Total Orders</th>
            <th>Pending Orders</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row, i) => (
            <tr key={i}>
              <td>{`Darrell Williamson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`25000`}</td>
              <td>{`10`}</td>
              <td>{`5`}</td>
              <td>
                <button className='artist-blockBtn'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOrdersTable;
