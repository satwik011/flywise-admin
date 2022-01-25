import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { blockAndUnBlockEmployee } from '../../redux/api';
import '../../styles/ArtistsTable.css';

const EmployeesTable = (props) => {
  const { allEmployees, fetchEmployeeList } = props;
  const history = useHistory();

  const goToEmployee = (id) => {
    history.push(`/employees/detail/${id}`);
  };

  const blockOrUnblock = async (id) => {
    try {
      await blockAndUnBlockEmployee(id);
      fetchEmployeeList();
    } catch (error) {
      console.log(error);
    }
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
              <td onClick={() => goToEmployee(employee._id)} className='cursor'>
                {employee.username ? employee.username : ''}
              </td>
              <td onClick={() => goToEmployee(employee._id)} className='cursor'>
                {employee.address ? employee.address : ''}
              </td>
              <td onClick={() => goToEmployee(employee._id)} className='cursor'>
                {employee.createdAt
                  ? moment(employee.createdAt).format('DD/MM/YYYY, h:mm a')
                  : ''}
              </td>
              <td
                onClick={() => goToEmployee(employee._id)}
                className='cursor'
              >{`100`}</td>
              <td
                onClick={() => goToEmployee(employee._id)}
                className='cursor'
              >{`20`}</td>
              <td>
                <button
                  className='artist-blockBtn'
                  onClick={() => blockOrUnblock(employee._id)}
                >
                  {!employee.blocked ? 'Block' : 'Unblock'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
