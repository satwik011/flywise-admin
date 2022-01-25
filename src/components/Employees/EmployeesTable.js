import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import '../../styles/ArtistsTable.css';

const EmployeesTable = (props) => {
  const { allEmployees } = props;
  const history = useHistory();

  const goToEmployee = (id) => {
    history.push(`/employees/detail/${id}`);
  };

  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Employees</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Total Artists</th>
            <th>Pending Orders</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allEmployees?.map((employee) => (
            <tr key={employee._id}>
              <td onClick={() => goToEmployee(employee._id)}>
                {employee.username ? employee.username : ''}
              </td>
              <td onClick={() => goToEmployee(employee._id)}>
                {employee.address ? employee.address : ''}
              </td>
              <td onClick={() => goToEmployee(employee._id)}>
                {employee.createdAt
                  ? moment(employee.createdAt).format('DD/MM/YYYY, h:mm a')
                  : ''}
              </td>
              <td onClick={() => goToEmployee(employee._id)}>{`100`}</td>
              <td onClick={() => goToEmployee(employee._id)}>{`20`}</td>
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
