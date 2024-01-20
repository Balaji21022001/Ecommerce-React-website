import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import product2 from './images/prod2.jpeg'
import product1 from './images/prod1.jpeg'
import product3 from './images/prod3.jpeg'
import product4 from './images/prod4.jpeg'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { cartfile } from '../features/cart/cartSlice'
import { ProductData } from './ProductData'
const Specialprod = () => {
 console.log(ProductData)
 return (
    <div>
  <div  className='row'>
   <div className='col-6 mb-3'>
   <div className='special-product-card'>
<div className='d-flex justify-content-between'>
  <div>
   <img src={product1} 
     style={{width:'300px',height:'280px'}}
     className='img-fluid'
     alt='img' /> 
  </div>  
     <div className='special-product-content'
      style={{padding:'25px'}}>
     <h5>White shirt</h5>
     <h6>Denim white shirt cool look!</h6>
     <p className='price'> 
     <span className='red-p'>$300</span>&nbsp; <strike>$200</strike>
     </p>
     <div className='discount-till '>
     <p>
     <b>5 days</b>
     </p>
     <div className='d-flex' >
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     </div>
     <div className='prod-count my-3'>
     <p>products:5</p>
     <div className='progress'>
     <div class='progress-bar' style={{width:'25%'}}
     role='progressbar' aria-valuenow='45'
     aria-valuemin='0'
     aria-valuemax='100'>
     </div>
     </div>
      
     </div>
     <Link className='Button'>Add to cart</Link>
     </div>
     </div>
     </div>
   </div>
   </div>

   <div className='col-6 mb-3'>
   <div className='special-product-card'>
<div className='d-flex justify-content-between'>
     <div>
     <img src={product2} 
     style={{width:'300px',height:'280px'}}
     className='img-fluid'
     alt='img' /> 
 </div> 
     <div className='special-product-content'
      style={{padding:'25px'}}>
     <h5>Blue shirt</h5>
     <h6>Denim white shirt cool look!</h6>
     <p className='price'> 
     <span className='red-p'>$500</span>&nbsp; <strike>$200</strike>
     </p>
     <div className='discount-till '>
     <p>
     <b>5 days</b>
     </p>
     <div className='d-flex' >
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     <div className='badge rounded-circle p-3 bg-warning'>
     1</div>
     </div>
     <div className='prod-count my-3'>
     <p>products:5</p>
     <div className='progress'>
     <div class='progress-bar' style={{width:'25%'}}
     role='progressbar' aria-valuenow='45'
     aria-valuemin='0'
     aria-valuemax='100'>
     </div>
     </div>
      
     </div>
     <Link className='Button'>Add to cart</Link>
     </div>
     </div>
     </div>
   </div>
   </div>
   </div>
  

<div className='row'>
<div className='col-6 mb-3'>
<div className='special-product-card'>
<div className='d-flex justify-content-between'>
  <div>
  <img src={product3} 
  style={{width:'300px',height:'280px'}}
  className='img-fluid'
  alt='img' /> 
</div> 
  <div className='special-product-content'
   style={{padding:'25px'}}>
  <h5>Orange 
  shirt</h5>

  <h6>Denim white shirt cool look!</h6>
  <p className='price'> 
  <span className='red-p'>$300</span>&nbsp; <strike>$200</strike>
  </p>
  <div className='discount-till '>
  <p>
  <b>5 days</b>
  </p>
  <div className='d-flex' >
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  </div>
  <div className='prod-count my-3'>
  <p>products:5</p>
  <div className='progress'>
  <div class='progress-bar' style={{width:'25%'}}
  role='progressbar' aria-valuenow='45'
  aria-valuemin='0'
  aria-valuemax='100'>
  </div>
  </div>
   
  </div>
  <Link className='Button'>Add to cart</Link>
  </div>
  </div>
  </div>
</div>
</div>

<div className='col-6 mb-3'>
<div className='special-product-card'>
<div className='d-flex justify-content-between'>
  <div>
  <img src={product4} 
  style={{width:'300px',height:'280px'}}
  className='img-fluid'
  alt='img' /> 
</div> 
  <div className='special-product-content'
   style={{padding:'25px'}}>
  <h5>Blue shirt</h5>
  <h6>Denim white shirt cool look!</h6>
  <p className='price'> 
  <span className='red-p'>$500</span>&nbsp; <strike>$200</strike>
  </p>
  <div className='discount-till '>
  <p>
  <b>5 days</b>
  </p>
  <div className='d-flex' >
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  <div className='badge rounded-circle p-3 bg-warning'>
  1</div>
  </div>
  <div className='prod-count my-3'>
  <p>products:5</p>
  <div className='progress'>
  <div class='progress-bar' style={{width:'25%'}}
  role='progressbar' aria-valuenow='45'
  aria-valuemin='0'
  aria-valuemax='100'>
  </div>
  </div>
   
  </div>
  <Link className='Button'>Add to cart</Link>
  </div>
  </div>
  </div>
</div>
</div>
</div>
 </div>
   
  )
}

export default Specialprod
