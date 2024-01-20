import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Home from './images/Home.jpg'
import locatiin from './images/locatiin.png'
import phone from './images/phone.png'
import mail from './images/mail.png'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
    <Breadcrumb  title='contact'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-12'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250648.46953443537!2d76.8202875435172!3d11.00991378312928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701586418306!5m2!1sen!2sin" width="80%" height="400px"className='border-0 w-100%'referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='col-12 mt-5'>
    <div className='contact-inner-wrapper d-flex justify-content-between'>
    <div>
    <h3 className='contact-title'>Contact</h3>
    <form className='d-flex flex-column gap-15'>
    <div>
    <input type='text' className='form-control '
    placeholder='Name' />
          </div>
    <div>
    <input type='email' className='form-control'
    placeholder='email'  />
    </div>
  
    <div>
    <input type='number' className='form-control'
    placeholder='Number' />
    </div>
   
   <div>
   <textarea placeholder='Comment'className='form-control '>
   </textarea>
   </div>
   
   <div>
   <button className='btn btn-primary button'>Submit Review</button>
   </div>

   </form>
    </div>
    <div className='contact-main'>
    <h3 className='contact-title'>Get in touch with us</h3>
    <div>
    <ul className='ps-0 unlist' >
     <li className='mb-3 d-flex gap-15 align-items-center lists'> 
     <address>Address : No 239 Pillayar street, near 
     round corner,Madhya pradesh</address>
     </li>
     <li className='mb-3 lists'>contact :<a href='tel:+91 987654321'>+91 987654321</a></li>
      <li className='mb-3 lists'>Mail us <a href='mailto:balaji091@gmail.com'>:balaji091@gmail.com</a></li>
      <li className='mb-3 lists'>Monday-Friday 10AM -8PM </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
