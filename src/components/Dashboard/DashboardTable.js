import React from 'react';
import '../../styles/ArtistsTable.css';

const DashboardTable = (props) => {
  const { paymentList } = props;

  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Status</th>
            <th>Artist</th>
            {/**<th>Location</th> */}
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentList.map((payment) => (
            <tr key={payment._id}>
              <td>{payment._id}</td>
              <td style={{ textTransform: 'capitalize' }}>{payment.status}</td>
              <td style={{ textTransform: 'capitalize' }}>
                {payment?.artistId?.username}
              </td>
              {/**<td>{`Corona, Michigan`}</td> */}
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
