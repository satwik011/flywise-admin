import React from 'react';
import '../../styles/ArtistsTable.css';

const EmployeeOrdersTable = (props) => {
  const { linkedArtists } = props;

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
          {linkedArtists?.map((artist) => {
            return (
              <tr key={artist._id}>
                <td>{artist.username}</td>
                <td>{artist.address}</td>
                <td>{'2000'}</td>
                <td>{`10`}</td>
                <td>{`5`}</td>
                <td>
                  <button className='artist-blockBtn'>Block</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeOrdersTable;
