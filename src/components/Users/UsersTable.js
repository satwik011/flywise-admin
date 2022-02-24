import React from 'react';
import moment from 'moment';
import { blockUnblockUser } from '../../redux/api';
import '../../styles/ArtistsTable.css';

const UsersTable = (props) => {
  const { allUsers, fetchUserList } = props;

  const handleBlock = async (id) => {
    try {
      const { data } = await blockUnblockUser(id);
      console.log(data);
      fetchUserList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Location</th>
            <th>Instagram</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.username ? user.username : 'NA'}</td>
              <td>{user.phone ? user.phone : 'NA'}</td>
              <td>{user.email ? user.email : 'NA'}</td>
              <td>{user.location ? user.location : 'NA'}</td>
              <td>{user.insta ? user.insta : 'NA'}</td>
              <td>
                {' '}
                {user?.createdAt
                  ? moment(user?.createdAt).format('MMMM Do YYYY')
                  : ''}
              </td>
              {/**<td>{`Pending`}</td> */}
              <td>
                <button
                  className='user-blockBtn'
                  onClick={() => handleBlock(user._id)}
                >
                  {user?.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
