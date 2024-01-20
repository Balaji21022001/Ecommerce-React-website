import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
const Forgetpassword = () => {
  return (
    <div>
      <Breadcrumb title='forgetpassword' />
      <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-8'>
      <div className='login-card '>
      <h3 className='text-center'>Reset password</h3>
      <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
      <form onSubmit={(e) =>e.preventDefault}
      className='d-flex flex-column gap-25'
      >
      <div>
      <input type='email'
      placeholder='Email' className='form-control'
      style={{borderRadius:'10px'}} / >
      </div>
      <div>
     <div className='d-flex flex-column justiy-content-center gap-15 align-items
     -center'>
     <button className='btn btn-primary w-60 m-auto' type='submit'>Submit</button>
     <Link to='/login' className='btn btn-primary signup m-auto'>Cancel</Link>
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

export default Forgetpassword
