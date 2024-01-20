import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import pant from './images/pant.jpeg'
import blackwatch from './images/blackwatch.jpeg'
import grid1 from './images/grid1.jpg'
import grid2 from './images/grid2.png'
import grid3 from './images/grid3.jpg'
import grid4 from './images/grid4.jpg'
import Productcards from '../components/Productcards'

const Ourstore = () => {
  return (
    <div>
   <Breadcrumb title='Our store' />
  <div className='store-wrapper home-wrapper-2 py-5'>
   <div className='container-xxl'>
  <div className='row'>
  <div className='col-3'>
  <div className='filter-card mb-3'>
  <h3 className='filter-title'>SHOP BY CATEGORIES</h3>
  <div>
  <ul className='ps-0'>
  <li>Shirts</li>
  <li>Tshirt &Track</li>
  <li >pant</li>
  <li >chudi</li>
  </ul>
  </div>
  </div>
  
  <div className='filter-card mb-3'> 
  <h3 className='filter-title'>Filter  by</h3>
  <div>
  <h5 className='sub-title'>Availability</h5>
 <div className='form-check'>
 <input type='checkbox' className='inputForm'
 value='' id=''/>
<label htmlFor='washes'
className='form-label'
>instock(1)</label>

</div>
<div className='form-check'>
<input type='checkbox' className='inputForm'
value='' id=''/>
<label htmlFor='pants'
 className='form-label'>out of stock(0)
 </label> </div>
 <h5 className='sub-title'>Price</h5>
 <div className='d-flex align-items-center gap-15'>
 <div className='form-floating mb-3'>
 <input type='number' className='form-control'/>
<label htmlForfor='floatingInput' aria-placeholder='from'>From</label>
 </div>
 <div className='form-floating mb-3'>
 <input type='number' className='form-control' />
<label htmlForfor='floatingInput'aria-placeholder='to' >To</label>
 </div>
 </div>
 <h5 className='sub-title'>Colors</h5>
 <div>
 <ul className='colors ps-0'>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 <li></li>
 </ul>
 </div>
 <h5 className='sub-title'>Size</h5>
 <div>
 <div className='form-check'>
 <input type='checkbox' className='inputForm'
 value='' id='color-1'/>
<label htmlFor='color-1'
className='Color-1'
>M(1)</label>

</div>
<div className='form-check'>
<input type='checkbox' className='inputForm'
value='' id='color-2'/>
<label htmlFor='color-2'
className='Color-2'
>S(1)</label>

</div>
 </div>
 </div>
  </div>
  <div>
 
 
  </div>


  <div className='filter-card mb-3'> 
  <h3 className='filter-title'> product tages </h3>
  <div>
  <div className='product-tags d-flex flex-wrap 
  align-items-center gap-10'>
  <span className='badge bg-dark text-secondary rounded-3 py-2 px-3'>
   shirts
  </span>
  <span className='badge bg-dark text-secondary rounded-3 py-2 px-3'>
  pants
 </span>
 <span className='badge bg-dark text-secondary rounded-3 py-2 px-3'>
 Trowsers && Tshirts
</span>
<span className='badge bg-dark text-secondary rounded-3 py-2 px-3'>
chudi
</span>
<span className='badge bg-dark text-secondary rounded-3 py-2 px-3'>
Coat
</span>
  </div>
  </div>
  </div>


  <div className='filter-card mb-3'> 
  <h3 className='filter-title'>Random tags</h3>
  <div>
  <div className='random-products d-flex mb-3'>
  <div className='w-50'>
  <img src={blackwatch} alt='pant' className='img-fluid' />
  </div>
  <div className='w-30'>
  <h5>Black watch Rayomnd</h5>
  <b className='pricetag'>$500.00</b>
  </div>

 
  </div>
  <div className='random-products d-flex'>
  <div className='w-50'>
  <img src={pant} alt='pant' className='img-fluid' />
  </div>
  <div className='w-30'>
  <h5>Blue pant Rayomnd</h5>
  <b className='pricetag'>$1200.00</b>
  </div>

 
  </div>
  </div>
  </div>
  </div>
  
  <div className='col-9'>
  <div className='headerwrapgrid mb-4'>
     <div className='d-flex justify-content-between align-items-center'>
     <div className='d-flex align-items-center gap-10'>
     <p className='sortby mb-0'>Sort by: </p>
     <select className='form-control form-select'>
     <option value='bestselling' selected="selected">Best selling</option>
     <option value='title-ascending'>Alphabetically a-z</option>
     <option value='title-descending'>Alphabetically z-a
     </option>
     <option value='price-ascending'>Price low to high</option>
     <option value='price-descending'>Price high to low</option>
     <option value='created-ascending'>Date ,old to new
     </option>
     </select> 
     </div>
     <div className='d-flex align-items-center gap-10'>
     <p className='totalproducts mb-0'>21 products</p>
     <div className='d-flex gap-10 align-items-center grid'>
    <img className='d-block img-fluid' 
      src={grid2} alt='gr-1' style={{height:'15px',
     width:'20px'}} />
     <img  className='d-block img-fluid'
     src={grid4} alt='gr-1' style={{height:'15px',
     width:'20px'}} />
     <img className='d-block img-fluid'

     src={grid3} alt='gr-1' style={{height:'15px',
     width:'20px'}} />
     <img  className='d-block img-fluid'
      src={grid1} alt='gr-1' style={{height:'15px',
     width:'20px'}} />
    </div>
     </div>
     </div>
  </div>
  <div className='products-list pb-5 d-flex
    flex-wrap gap-5 p-20'>
 <Productcards />

 </div>

  </div>
  </div>
  </div>
 </div>
</div>
  )
}

export default Ourstore
