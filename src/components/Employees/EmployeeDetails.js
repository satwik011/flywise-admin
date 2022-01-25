import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import EmployeeOrdersTable from './EmployeeOrdersTable';
import demoProfile from '../../images/demoProfile.png';
import {
  getAnEmployee,
  blockAndUnBlockEmployee,
  deleteAnEmployee,
  getArtistsOfAnEmployee,
} from '../../redux/api';
import '../../styles/EmployeeDetails.css';

const EmployeeDetails = (props) => {
  const history = useHistory();
  const [employeeData, setEmployeeData] = useState({});
  const [linkedArtists, setLinkedArtists] = useState([]);
  const [boolVal, setBoolVal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const id = props.match.params.id;

  const fetchEmployee = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await getAnEmployee(id);
      setEmployeeData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const fetchArtists = async (id) => {
    try {
      const { data } = await getArtistsOfAnEmployee(id);
      setLinkedArtists(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchEmployee(id);
      fetchArtists(id);
      setBoolVal(true);
    }
  }, [boolVal, id]);

  const blockOrUnblock = async () => {
    try {
      await blockAndUnBlockEmployee(id);
      fetchEmployee(id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async () => {
    try {
      await deleteAnEmployee(id);
      history.push('/employees');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='employeeDetails-container'>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Fragment>
          <div className='employeeDetails-personalInfoDiv'>
            <div className='employeeDetails-leftDiv'>
              <div className='employeeDetails-imageDiv'>
                <img
                  src={demoProfile}
                  alt='profilePic'
                  className='employeeDetails-image'
                />
              </div>
              <div className='employeeDetails-infoDiv'>
                <p className='employeeDetails-infoPara'>
                  {employeeData.username ? employeeData.username : ''},{' '}
                  <span className='employeeDetails-infoSpan'>
                    {employeeData.gender ? employeeData.gender : ''}
                  </span>
                </p>
                <p className='employeeDetails-infoPara'>
                  {employeeData.phone ? employeeData.phone : ''}
                </p>
                <p className='employeeDetails-infoPara'>
                  {employeeData.email ? employeeData.email : ''}
                </p>
              </div>
            </div>
            <div className='employeeDetails-rightDiv'>
              <div className='employeeDetails-rightBtnDiv'>
                <button
                  className='employeeDetails-rightBtn block'
                  onClick={blockOrUnblock}
                >
                  {employeeData.blocked ? 'Unblock' : 'Block'}
                </button>
                <button
                  className='employeeDetails-rightBtn delete'
                  onClick={deleteEmployee}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          <div className='employeeDetails-incomeSection'>
            <div className='employeeDetails-incomeCardDiv'>
              <p className='employeeDetails-incomeCardLabel'>Total Income</p>
              <div className='employeeDetails-incomeCard'>
                <h3 className='employeeDetails-incomeCardTitle'>
                  Total Income
                </h3>
                <p className='employeeDetails-income'>Rs 25000/-</p>
              </div>
            </div>
            <div className='employeeDetails-incomeCardDiv'>
              <p className='employeeDetails-incomeCardLabel'>Weekly Income</p>
              <div className='employeeDetails-incomeCard'>
                <h3 className='employeeDetails-incomeCardTitle'>
                  Weekly Income
                </h3>
                <p className='employeeDetails-income'>Rs 25000/-</p>
              </div>
            </div>
            <div className='employeeDetails-ordersDiv'>
              <h4 className='employeeDetails-orderTitle'>Total Artists</h4>
              <p className='employeeDetails-order'>100</p>
            </div>
            <div className='employeeDetails-ordersDiv'>
              <h4 className='employeeDetails-orderTitle'>Total Orders</h4>
              <p className='employeeDetails-order'>80</p>
            </div>
          </div>
          <div className='employeeDetails-tableSection'>
            <EmployeeOrdersTable linkedArtists={linkedArtists} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default EmployeeDetails;
