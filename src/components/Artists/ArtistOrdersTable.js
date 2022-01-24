import React from 'react';
import '../../styles/ArtistsTable.css';

const ArtistOrdersTable = () => {
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Users</th>
            <th>Location</th>
            <th>Due Date</th>
            <th>Order Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row, i) => (
            <tr key={i}>
              <td>{`Darrell Williamson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`#0100`}</td>
              <td>{`Completed`}</td>
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

export default ArtistOrdersTable;
