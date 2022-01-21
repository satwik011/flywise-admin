import React from 'react';
import '../../styles/ArtistsTable.css';

const PaymentsTable = () => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
            <tr>
              <td>{`Darrell Williamson`}</td>
              <td>{`Corona, Michigan`}</td>
              <td>{`03/03/12 22:43`}</td>
              <td>{`100`}</td>
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
