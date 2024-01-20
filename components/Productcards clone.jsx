import React from 'react'
import compare from './images/compare.png'
import wishlist from './images/wishlist.jpg'
import view from './images/view.png'
import track from './images/track.jpg'
import { Link } from 'react-router-dom'
import cartimg from './images/cartimg.png'
import Singleproduct from '../pages/Singleproduct'
import Tshirt1 from '../components/images/Tshirt1.jpg'
import Tshirt2 from '../components/images/Tshirt2.jpeg'
import Tshirt3 from '../components/images/Tshirt3.jpeg'
import productblue from '../components/images/productblue.jfif'
import black from '../components/images/productblack.jpg'
import pink from '../components/images/productpink.jpg'
import blue1 from '../components/images/productblue1.jpeg'


const Productcardsclone = () => {
 return ( 
    <div className='container-xxl'>
    <div className='row d-flex justify-content-between'>
    <div className='col-3'> 
     <div className='product-card position-relative'>
     <div className='wishlist-icon position-absolute'>
     <Link  >
     <img src={wishlist} className='wishlistimg
      img-fluid'
     style={{height:'30px', width:'30px'}} 
     alt='wishlist' /></Link>
     </div>
     <div className='product-image'>
      
     <img src={productblue} alt='img' 
    className='img-fluid'
style={{height:'430px', width:'300px'}} />
    
    
        </div>
        
        <div className='product-details'>
        <h6 className='brand'>Track</h6>
        <h5 className='product-title'>
        Mens Track collrction with latest trends
        </h5>
        <p className='price'>$100.00</p>
        <Link to='/product/:id'>More Details</Link>
        </div>
       <div className='action-bar position-absolute'>
       <div className='d-flex flex-column gap-15'>
       <Link>
       <img src={compare} alt='addtocart' style={{height:'30px',
      width:'30px'}} />
       </Link>
       <Link>
       <img src={view} alt='addtocart'
       style={{height:'30px', width:'30px'}} />
       </Link>
       <Link>
       <img src={cartimg} alt='addtocart'
       style={{height:'30px',
      width:'30px'}} />
       </Link>

       </div>
       </div>
        </div>
     </div>
   
     <div className='col-3'>  
     <div className='product-card position-relative'>
  <div className='wishlist-icon position-absolute'>
  <Link  >
  <img src={wishlist} className='wishlistimg
   img-fluid'
  style={{height:'30px', width:'30px'}} 
  alt='wishlist' /></Link>
  </div>
  <div className='product-image'>
   
  <img src={black} alt='img' 
 className='img-fluid'
style={{height:'430px', width:'300px'}} />
 
 
     </div>
     
     <div className='product-details'>
     <h6 className='brand'>Track</h6>
     <h5 className='product-title'>
     Mens Track collrction with latest trends
     </h5>
     <p className='price'>$100.00</p>
     <Link to='/product/:id'>More Details</Link>
     </div>
    <div className='action-bar position-absolute'>
    <div className='d-flex flex-column gap-15'>
    <Link>
    <img src={compare} alt='addtocart' style={{height:'30px',
   width:'30px'}} />
    </Link>
    <Link>
    <img src={view} alt='addtocart'
    style={{height:'30px', width:'30px'}} />
    </Link>
    <Link>
    <img src={cartimg} alt='addtocart'
    style={{height:'30px',
   width:'30px'}} />
    </Link>

    </div>
    </div>
     </div>
     </div>
     <div className='col-3'> 
     <div className='product-card position-relative'>
     <div className='wishlist-icon position-absolute'>
     <Link  >
     <img src={wishlist} className='wishlistimg
      img-fluid'
     style={{height:'30px', width:'30px'}} 
     alt='wishlist' /></Link>
     </div>
     <div className='product-image'>
      
     <img src={blue1} alt='img' 
    className='img-fluid'
style={{height:'430px', width:'300px'}} />
    
    
        </div>
        
        <div className='product-details'>
        <h6 className='brand'>Track</h6>
        <h5 className='product-title'>
        Mens Track collrction with latest trends
        </h5>
        <p className='price'>$100.00</p>
        <Link to='/product/:id'>More Details</Link>
        </div>
       <div className='action-bar position-absolute'>
       <div className='d-flex flex-column gap-15'>
       <Link>
       <img src={compare} alt='addtocart' style={{height:'30px',
      width:'30px'}} />
       </Link>
       <Link>
       <img src={view} alt='addtocart'
       style={{height:'30px', width:'30px'}} />
       </Link>
       <Link>
       <img src={cartimg} alt='addtocart'
       style={{height:'30px',
      width:'30px'}} />
       </Link>

       </div>
       </div>
        </div>
        </div>
        <div className='col-3'> 
        <div className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
        <Link  >
        <img src={wishlist} className='wishlistimg
         img-fluid'
        style={{height:'30px', width:'30px'}} 
        alt='wishlist' /></Link>
        </div>
        <div className='product-image'>
         
        <img src={pink} alt='img' 
       className='img-fluid'
   style={{height:'430px', width:'300px'}} />
       
       
           </div>
           
           <div className='product-details'>
           <h6 className='brand'>Track</h6>
           <h5 className='product-title'>
           Mens Track collrction with latest trends
           </h5>
           <p className='price'>$100.00</p>
           <Link to='/product/:id'>More Details</Link>
           </div>
          <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
          <Link>
          <img src={compare} alt='addtocart' style={{height:'30px',
         width:'30px'}} />
          </Link>
          <Link>
          <img src={view} alt='addtocart'
          style={{height:'30px', width:'30px'}} />
          </Link>
          <Link>
          <img src={cartimg} alt='addtocart'
          style={{height:'30px',
         width:'30px'}} />
          </Link>
   
          </div>
          </div>
           </div>
           </div>  
    
     </div> </div>)
}

export default Productcardsclone


/*-original */