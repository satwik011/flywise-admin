import React from 'react';
import '../../styles/ArtistsTable.css';

const UsersTable = (props) => {
  const { allUsers } = props;
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Users</th>
            <th>Phone Number</th>
            <th>Due Date</th>
            <th>Order Number</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user._id}>
              <td>{`Darrell Williamson`}</td>
              <td>{user.phone ? user.phone : ''}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`#200`}</td>
              <td>{`Pending`}</td>
              <td>
                <button className='user-blockBtn'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
