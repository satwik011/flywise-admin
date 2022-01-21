import React from 'react';
import '../../styles/ArtistsTable.css';

const EmployeesTable = (props) => {
  // const { allEmployees } = props;
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Total Artists</th>
            <th>Pending Orders</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row, i) => (
            <tr key={i}>
              <td>{`Darrell Williamson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`100`}</td>
              <td>{`20`}</td>
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

export default EmployeesTable;
