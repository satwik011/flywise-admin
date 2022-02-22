import React, { useState, useEffect, Fragment } from 'react';
import ArtistSetPaymentMode from './ArtistSetPaymentMode';
import ArtistAccountDetails from './ArtistAccountDetails';
import CongratulationScreen from './CongratulationScreen';
import { getEmployeeList } from '../../redux/api';
import '../../styles/AddArtistForm.css';
import LoadingPage from '../utils/LoadingPage';

const initialState = {
  username: '',
  phone: '',
  email: '',
  address: '',
  assignedEmployee: '6213c73e2d17e52c165d6c80',
  appName: '',
  accountNo: '',
  ifscCode: '',
  services: [],
  upiId: '',
  commission: '',
};

const AddArtistForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [mode, setMode] = useState('account');
  const [page, setPage] = useState(1);
  const [inputList, setInputList] = useState([
    { serviceName: '', amount: '', description: '' },
  ]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [boolVal, setBoolVal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const { data } = await getEmployeeList();
      setAllEmployees(data);
      setFormData({
        ...formData,
        assignedEmployee: '6213c73e2d17e52c165d6c80',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!boolVal) {
      fetchEmployees();
      setBoolVal(true);
    }
  }, [boolVal]);

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { serviceName: '', amount: '', description: '' },
    ]);
  };

  const handleNext = () => {
    setFormData({ ...formData, services: inputList });
    setPage(page + 1);
  };

  return (
    <div className='addArtist-container'>
      {loading ? (
        <LoadingPage />
      ) : (
        <Fragment>
          {page === 1 && (
            <div className='addArtist-personalDetails'>
              <div className='addArtist-alignRow'>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>Full Name</label>
                  <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='Full Name'
                    className='addArtist-inputField'
                  />
                </div>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>Contact Number</label>
                  <input
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Contact Number (10-digit)'
                    className='addArtist-inputField'
                  />
                </div>
              </div>
              <div className='addArtist-alignRow'>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>E-mail</label>
                  <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='E-mail'
                    className='addArtist-inputField'
                  />
                </div>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>Address</label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    placeholder='Address & Pincode'
                    className='addArtist-inputField'
                  />
                </div>
              </div>
              <div className='addArtist-alignRow'>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>App Name</label>
                  <input
                    type='text'
                    name='appName'
                    value={formData.appName}
                    onChange={handleChange}
                    placeholder='App Name'
                    className='addArtist-inputField'
                  />
                </div>
                <div className='addArtist-inputFieldDiv'>
                  <label className='addArtist-inputLabel'>
                    Employee Assigned
                  </label>
                  {/**<input
                type='text'
                name='employee'
                placeholder='Employee Assigned'
                className='addArtist-inputField'
              /> */}
                  <select
                    className='addArtist-selectField'
                    name='assignedEmployee'
                    value={formData.assignedEmployee}
                    onChange={handleChange}
                  >
                    {allEmployees?.map((employee) => (
                      <option
                        value={employee.employeeId}
                        selected={
                          employee.employeeId === '6213c73e2d17e52c165d6c80'
                        }
                      >
                        {employee.employeeName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {inputList.map((val, index) => (
                <div className='addArtist-servicesDiv' key={index}>
                  <div className='addArtist-alignRow'>
                    <div className='addArtist-inputFieldDiv'>
                      <label className='addArtist-inputLabel'>Services</label>
                      <input
                        type='text'
                        name='serviceName'
                        value={formData.serviceName}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder='Service name'
                        className='addArtist-inputField'
                      />
                      {/**<select
                    className='addArtist-selectField'
                    name='serviceName'
                    onChange={(e) => handleInputChange(e, index)}
                  >
                    <option value='service1'>Service 1</option>
                    <option value='service2'>Service 2</option>
                    <option value='service3'>Service 3</option>
                  </select> */}
                    </div>
                    <div className='addArtist-inputFieldDiv'>
                      <label className='addArtist-inputLabel'>Amount</label>
                      <input
                        type='text'
                        name='amount'
                        value={val.amount}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder='Amount'
                        className='addArtist-inputField'
                      />
                    </div>
                  </div>
                  <div className='addArtist-alignRow'>
                    <div className='addArtist-textFieldDiv'>
                      <label className='addArtist-inputLabel'>
                        Description
                      </label>
                      <textarea
                        className='addArtist-textField'
                        rows='3'
                        placeholder='Service Description'
                        name='description'
                        value={val.description}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  </div>
                  {inputList.length > 1 && (
                    <div className='removeBtnDiv'>
                      <button
                        className='removeBtn'
                        onClick={() => handleRemoveClick(index)}
                      >
                        +
                      </button>
                    </div>
                  )}
                  {index === inputList.length - 1 && (
                    <div className='addBtnDiv'>
                      <button
                        className='service-addBtn'
                        onClick={handleAddClick}
                      >
                        + add
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className='addArtist-submitDetailDiv'>
                <button
                  className='addArtist-submitDetailBtn'
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {page === 2 && (
            <ArtistSetPaymentMode
              page={page}
              setPage={setPage}
              mode={mode}
              setMode={setMode}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {page === 3 && (
            <ArtistAccountDetails
              page={page}
              setPage={setPage}
              mode={mode}
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          )}
          {page === 4 && (
            <CongratulationScreen
              page={page}
              setPage={setPage}
              formData={formData}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default AddArtistForm;
