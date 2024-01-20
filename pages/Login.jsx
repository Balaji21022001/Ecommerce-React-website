import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Breadcrumb title='login' />
      <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-8'>
      <div className='login-card'>
      <h3 className='text-center'>Login</h3>
      <form onSubmit={(e) =>e.preventDefault}
      className='d-flex flex-column gap-25'
      >
      <div>
      <input type='email'
      placeholder='Email' className='form-control'
      style={{borderRadius:'10px'}} / >
      </div>
      <div>
      <input type='password'
      placeholder='password' className='form-control'
      style={{borderRadius:'10px'}} / >
      </div>
      <div>
       <Link to='/forgetpassword'>Forget password ?</Link>
     <div className='d-flex justiy-content-center gap-15 align-items
     -center'>
     <button className='btn btn-primary'>Login</button>
     <Link to='/signup' className='btn btn-primary signup'>Signup</Link>
     </div>
       </div>
     </form>
   
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login
