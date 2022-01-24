import React from 'react';
import moment from 'moment';
import '../../styles/ArtistsTable.css';

const PaymentsTable = (props) => {
  const { allPayments } = props;
  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Credited to</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allPayments?.map((payment) => (
            <tr key={payment._id}>
              <td>{payment._id}</td>
              <td>{`Corona, Michigan`}</td>
              <td>
                {payment.createdAt
                  ? moment(payment.createdAt).format('DD/MM/YYYY, h:mm a')
                  : ''}
              </td>
              <td>{`Rs. ${payment.amount}`}</td>
              <td>{`20`}</td>
              <td>
                <button className='payment-blockBtn'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
