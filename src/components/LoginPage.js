import React from 'react';
import demoLogo from '../images/demo-logo.png';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='loginPage-container'>
      <div className='loginPage-formDiv'>
        <div className='loginPage-formHeaderDiv'>
          <div className='logoContainer'>
            <img src={demoLogo} alt='logo' className='logoImage' />
            <span className='brandName'>Fanstar </span>
          </div>
          <div className='loginPage-headerContent'>
            <h3 className='loginPage-headerTitle'>Log In to Dashboard </h3>
            <p className='loginPage-headerSub'>
              Enter your email and password below
            </p>
          </div>
        </div>
        <div className='loginPage-formContent'>
          <div className='loginPage-formFieldDiv'>
            <label className='loginPage-inputLabel'>Email</label>
            <input
              type='email'
              name='email'
              className='loginPage-inputField'
              placeholder='Email address'
            />
          </div>
          <div className='loginPage-formFieldDiv'>
            <div className='loginPage-passDiv'>
              <label className='loginPage-inputLabel'>Password</label>
              <label className='loginPage-inputLabel forgotPass'>
                Forgot password?
              </label>
            </div>
            <input
              type='password'
              name='email'
              placeholder='Password'
              className='loginPage-inputField'
            />
          </div>
          <div className='loginPage-submitBtnDiv'>
            <button className='loginPage-submitBtn'>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
