import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './indexmain.css'
import wishlist from './images/wishlist.jpg'
import cartimg from './images/cartimg.png'
import compare from './images/compare.png'
import {  useSelector } from 'react-redux'
import { cartfile } from '../features/cart/cartSlice'

const Header = () => {
  const cartlength = useSelector(cartfile)
  console.log(cartlength)
  return (
     <div>
    <header className='header-top-strip pt-10'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-6'>
    <p className='text-white mb-0'>Free shipping over $100 & free Returns</p>
    </div>
    <div className='col-6'>
    <p className='text-end' style={{color:'red'}}>Hotline :<a className='text-white ' href='tel:+91 678965432'>+91 678965432</a></p>
    </div>
      </div>
    </div>
    </header>
    <header className='header-upper py-3'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-lg-2 col-md-2 col-2'>
<h1><Link className='text-green'>Shopee</Link></h1>
    </div>
    <div className='col-lg-5 col-md-5 col-3'>
    <div className="input-group mb-3">
    <input type="text" className="form-control py-2" placeholder="search products here" 
    aria-label="search products here" aria-describedby="basic-addon2" />
    <span className="input-group-text" 
    id="basic-addon2"></span>
  </div>
    </div>
    <div className='col-lg-5 col-md-5 col-7'>
      <div className='header-upper-links d-flex align-items-center justify-content-between' >
     <div>
     <Link to='/wishlist' className='d-flex align-items-center gap-10
     text-white'  >
     <img src={wishlist} alt='' style={{height:'30px', width:'50px'}} />
     <p className='mb-0'>Favourite <br />  wishlist</p>
   
     </Link>
     </div>

     <div>
     <Link to='/compprod'  className='d-flex align-items-center gap-10
     text-white' >
     <img src={compare}
      alt='compare' 
     style={{height:'50px', width:'60px'}} />
     <p className='mb-0'>Compare</p>
     </Link>
     </div>

     <div>
     <Link to='/login' className='d-flex align-items-center gap-10
     text-white' >
     <img src='balario/src/components/images/icon2.jpg' alt='' style={{height:'30px', width:'50px'}} />
     <p className='mb-0'>log in <br/>  my account </p>
   
     </Link>
     </div>

     <div>
     <Link to='/cart'  className='d-flex align-items-center gap-10
     text-white'>
     <img src={cartimg}alt=''
      style={{height:'30px', width:'50px'}} />
      <div className='d-flex flex-column' >
     <span className='badge bg-white text-dark'>
     0
     </span>
     <p className='mb-0'>$ 500</p>
     </div>
     </Link>
     </div>
   </div>
    </div>
    </div>
    </div>
    </header>

 <header className='header-bottom py-3'>
 <div className='container-xxl'>
 <div className='row'>
 <div className='col-12'>
<div className='menu-bottom d-flex align-items-center gap-15'>
<div>
<div className="dropdown ">
 <ul className="dropdown-menu" bg-black
   aria-labelledby ="dropdownMenuButton1">
<li>
<Link className='dropdown-item' to='' >Home</Link>
</li>
<li>
<Link  className='dropdown-item' to='' >Home</Link>
</li>
<li>
<Link  className='dropdown-item' to='' >Home</Link>
</li>
  </ul>
</div>
</div>
<div className='menu-links'>
<div className='d-flex align-items-center gap-15'>
<NavLink to='/'>Home</NavLink>
<NavLink to='/product'>store</NavLink>
<NavLink to='/blogs'>blogs</NavLink>
<NavLink to='/contact'>contact</NavLink>
</div>
</div>
</div>
 </div>
 <div className='col-12'>
 
 </div>
 </div>
 
 
 </div>
 </header>
   </div>
)
}

export default Header
