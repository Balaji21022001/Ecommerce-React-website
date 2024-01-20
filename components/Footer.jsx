import React from 'react';
import './indexmain.css'
import { Link } from 'react-router-dom';
import twitter from './images/teitter.jpg'
import facebook from './images/facebook.jpg'
import instagram from './images/instagram.jpg'
import youtube from './images/youtube.jpg'
const Footer = () => {
  return (
    <div>
    <footer className='py-4'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-5'>
    <div className='footer-top-data d-flex gap-30 align-items-
    center'>
    <img src='' alt='newsletter' className='text-white' />
    <h2 className='mb-0 text-white'>sign up for newsletter</h2> 
     </div>
    </div>
    <div className='col-7'>
    <div className='input-group'>
    <input type="text" className="form-control py-1"
     placeholder="your email address" 
    aria-label="your email address" aria-describedby="basic-addon2" />
    <span className="input-group-text subsbtn"
    id="basic-addon2" >subscirbe</span>
    </div>
    </div>
    </div>
    </div>
 </footer>
 <footer className='py-4'>
 <div className='container-xxl'>
 <div className='row'>
 <div className='col-4'>
 <h2 className='text-white'>Contact us</h2>
 <div className='d-flex flex-column'>
 <p className='text-white'>Balaji store</p>
 <address className='text-white fs-6'>No 132 Freedom , Newyork
 ,11111</address>
 <p className='text-white'>india</p>
 <a href='tel:+91 567894321' className='mt-2 d-block
  mb-3 text-white'>+91 567894321</a> 
  <a href='mailto:Bala12345@gmail.com' 
  className='mt-2 d-block
  mb-3 text-white'>Bala12345@gmail.com</a>
 <div className='social-icons d-flex 
 align-items-center gap-30 '>
<a href='social'> <img src={twitter}
style={{height:'50px',width:'50px'}}
alt='social-icons' /></a>
<a href='social'><img src={facebook} 
style={{height:'50px',width:'50px'}}
alt='social-icons'/></a>
<a href='social'> <img src={instagram}  
style={{height:'50px',width:'50px'}}
 alt='social-icons'/></a>
<a href='social'> <img src={youtube} 
style={{height:'50px',width:'50px'}}
 alt='social-icons'/></a>
 </div>
 </div>
 </div>
 <div className='col-3'>
 <h2 className='text-white'>Information</h2>
 <div className='d-flex flex-column'> 
 <Link to='/Privacypolicy' className='text-white py-2 mb-1 fs-10'>Privacy policy</Link>
 <Link to='/Refundpolicy' className='text-white py-2 mb-1'
  >Refund policy</Link>
 <Link to='/Shippingpolicy' className='text-white py-2 mb-1' >Shipping policy</Link>
 <Link to='/Conditions' className='text-white py-2 mb-1'
  >Terms of condition</Link>
 <Link to='/blogs' className='text-white py-2 mb-1'
  >Blogs</Link>
 </div>
 </div>
 <div className='col-3'>
 <h2 className='text-white '>Account</h2>
 <div className='d-flex flex-column'> 
 <Link className='text-white py-2 mb-1'>Search</Link>
 <Link className='text-white py-2 mb-1' >Aboutus</Link>
 <Link className='text-white py-2 mb-1' >Faq</Link>
 <Link className='text-white py-2 mb-1'to='/contact' >Contact</Link>
 <Link className='text-white py-2 mb-1' >Size charts</Link>
 </div>
 </div>

 <div className='col-2'>
 <h2 className='text-white'>Quick links</h2>
 <div className='footer-links d-flex flex-column'>
 <Link className='text-white py-2 mb-1' to='/Home'>Home</Link>
 <Link className='text-white py-2 mb-1'to='/product' >products</Link>
 <Link className='text-white py-2 mb-1'to='/contact' >contact</Link>
 <Link className='text-white py-2 mb-1'to='/specialproduct' >specialproduct</Link>
 </div>
 </div>
 </div>
 
 </div>
 </footer>
 <footer className='py-4'>
 <div className='container-xxl'>
 <div className='row'>
 <div className='col-12'>
 <p className='text-center mb-0 text-white'>
 &copy; {new Date().getFullYear()}; powered by developers
 </p>
 </div>
 </div>
 </div>
 </footer>
    </div>
  )
}

export default Footer
