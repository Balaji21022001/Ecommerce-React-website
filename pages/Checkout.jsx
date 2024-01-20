import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import watch from './images/blackwatch.jpeg'

const Checkout = () => {
  return (
    <div>
      <Breadcrumb title='checkout'/>
      <div className='checkout-wrapper'>
      <div className='container-xxl'>
      <div className='row'>
      <div className='col-7'>
      <div className='checkout-left-data'>
      <h3 className='website-name'>Shopee</h3>
    <nav style={{"--bs-breadcrumb-divider": '>'}} 
    aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
    <Link to='/cart' class='text-dark  total-price'>Cart</Link></li>
    <li class="breadcrumb-item active"
     aria-current="page">
     </li>
     &nbsp; /
     <li class="breadcrumb-item">
    <Link to='/information' class='text-dark  total-price'>
    Information</Link></li>
    <li class="breadcrumb-item active"
     aria-current="page">
     </li>
     &nbsp; /
     <li class="breadcrumb-item active">
     <Link to='/shipping' class='text-dark total-price'>Shipping</Link></li>
     <li class="breadcrumb-item active"
      aria-current="page">
      </li> &nbsp; / <li class="breadcrumb-item active">
      <Link to='/payment' class='text-dark  total-price'>payment</Link></li>
      <li class="breadcrumb-item active"
       aria-current="page">
       </li>
       </ol>
</nav>
  <h4 className='title'>Contact information</h4>
  <p className='user-details'>Balaji (bala12345@gmail.com)</p>
  <h4 className='mb-3'>Shipping address</h4>
  <form className='d-flex flex-wrap gap-15 
  justify-content-between gap-15' onSubmit={(e) =>e.preventDefault}>
  <div className='w-100'>
  <select className='form-control form-select'>
  <option selected disabled>Select country</option>
  <option>USA</option>  <option>CHINA</option>
  <option>NEPAL</option>
  <option>PAKISTAN</option>
  <option>SRI LANKA</option>
  <option>RUSSIA</option>
  </select>
  </div>

  <div className='flex-grow-1'>
  <input type='text' placeholder='first name'
   className='form-control '/>
  </div>


  <div className='flex-grow-1'>  
  <input type='text'placeholder='last name' className='form-control '/>
  </div>

  <div className='w-100'>  
  <input type='text'placeholder='Address'
   className='form-control '/>
  </div>

  <div className='w-100'>  
  <input type='text'placeholder='APARTMENT'
   className='form-control '/>
  </div>

  <div className='flex-grow-1'>
  <input type='number'placeholder='zipcode'
   className='form-control '/>
  </div>
  <div className='flex-grow-1'> 
  <select className='form-control form-select'>
  <option selected disabled>City</option>
  <option>delhi</option>  <option>coimbatore</option>
  <option>chennai</option>
  <option>palakkad</option>
  <option>madurai</option>
  <option>theni</option>
  </select></div>
  <div className='flex-grow-1 mb-10'> 
   <input type='text' className='form-control  '/>
   </div>
   <div className='w-100'>
   <div className='d-flex justify-content-between align-items-center'>
   <Link to='/cart'  
   className='text-dark bg-white border-black bold'>Return to cart</Link>
   <Link to='/cart' className='btn btn-primary'>Continue to Shipping</Link>
   </div>
   </div>
  </form>
      </div>
      </div>
      <div className='col-5'>
      <div className='border-bottom py-4'>
     <div className='d-flex  justify-content-between
      align-items-center'>
     <div className='position-relative cart-head'>
     <span style={{top:'-10px',right:'2px'}}
      className='badge bg-secondary text-white
       rounded-circle p-2 position-absolute'>
     1
     </span>
     <img src={watch} style={{height:'100px',width:'100px'}}
      alt='watch'/>
      <div>
     <h5 className='title'>Fomal Watch</h5>
     </div>
     </div>
     
     <div>
     <h5 className='total-price'> $ 100</h5>
   
     </div>
     </div>
   
      </div>
      <div  className='border-bottom py-4'>
      <div className='d-flex justify-content-between 
      align-items-center'>
      <p className='total'>Subtotal</p> 
       <h5 className='total-price'>$ 1000</h5>
      </div>
      <div className='d-flex justify-content-between 
      align-items-center'>
      <p className='total'>Shipping</p> 
       <h5 className='total-price'>$ 500</h5>
      </div>
      </div>
      <div className='d-flex  border-bottom py-4 justify-content-between 
      align-items-center'>
      <h4 className='total'>Total</h4> 
       <h5 className='total-price'>$ 1600</h5>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout
