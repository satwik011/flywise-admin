import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/ArtistsTable.css';
import moment from 'moment/moment';
function Singlemodal(props) {
    console.log(props)
    return (
    <>
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Id</th>
            <th>Phone Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props?.modal?.map((user) => (
            <tr key={user._id}>
              <td>{(user.name) ? (user.name ):  'N/A' }</td>
              <td>{user.email ? user.email : 'NA'}</td>
              <td>{user.number ? user.number : 'NA'}</td>
              <td>{moment(user.createdAt).format('DD-MMM-YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Singlemodal