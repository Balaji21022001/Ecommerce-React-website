import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import pant from './images/pant.jpeg'
import corigincross from './images/coriginalcros.jpg'
import blackwatch from './images/blackwatch.jpeg'
const Compareproduct = () => {
  return (
    <div>
     <Breadcrumb title='compareproducts' />
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
    <div className='row'>
<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src={corigincross}  alt='cross' 
className='position-absolute img-fluid cross' 
style={{height:'60px',width:'50px'}}
/>
<div className='product-card-image'>
<img src={blackwatch} alt='shirt' className='img-fluid' />
</div>
<div className='compare-product-details'>
<h5 className='title'>New Black Rolex watch model sm3</h5>
<h6 className='price mb-3'>$500</h6>

<div>
<div className='product-detail'>
<h4>Brand :</h4>
<p>Rolex</p>
</div>
<div className='product-detail'>
<h4>Type :</h4>
<p>Chain type</p>
</div>
<div className='product-detail'>
<h4>Availability :</h4>
<p>in stock</p>
</div>
<div className='product-detail'>
<h4>Size :</h4>
<div className='d-flex gap-10'>
<p>S</p> <p>M</p> <p>L</p>
</div>

</div>
<div className='product-detail d-flex'>
<h4>Color :</h4>
<div className='d-flex gap-10'>
<div className='color1' ></div> <div className='color2'>
</div> 
<div className='color3'></div>
<div className='color4'></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className='col-3'>
<div className='compare-product-card position-relative'>
<img src={corigincross}  alt='cross' 
className='position-absolute img-fluid cross' 
style={{height:'60px',width:'50px'}}
/>
<div className='product-card-image'>
<img src={blackwatch} alt='shirt' className='img-fluid' />
</div>
<div className='compare-product-details'>
<h5 className='title'>New Black Rolex watch model sm3</h5>
<h6 className='price mb-3'>$500</h6>

<div>
<div className='product-detail'>
<h4>Brand :</h4>
<p>Rolex</p>
</div>
<div className='product-detail'>
<h4>Type :</h4>
<p>Chain type</p>
</div>
<div className='product-detail'>
<h4>Availability :</h4>
<p>in stock</p>
</div>
<div className='product-detail'>
<h4>Size :</h4>
<div className='d-flex gap-10'>
<p>S</p> <p>M</p> <p>L</p>
</div>

</div>
<div className='product-detail d-flex'>
<h4>Color :</h4>
<div className='d-flex gap-10'>
<div className='color1' ></div> <div className='color2'>
</div> 
<div className='color3'></div>
<div className='color4'></div>
</div>
</div>
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

export default Compareproduct
