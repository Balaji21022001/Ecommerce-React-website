import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import watch from './images/blackwatch.jpeg'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <div>
      <Breadcrumb title='Cart' />
      <section className='cart-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
      <div className='row'>
      <div className='col-12'>
      <div className='cart-header py-3 
      d-flex justify-content-between align-items-center'>
      <h4  className='cart-col-1'>Product</h4>
      <h4  className='cart-col-2'>price</h4>
      <h4  className='cart-col-3'>quantity</h4>
      <h4  className='cart-col-4'>Total</h4>
      </div>
      <div className='cart-data py-3 
      d-flex justify-content-between align-items-center'>
    <div className='cart-col-1 d-flex gap-15 align-items-center'>
    <div>
    <img src={watch} 
    alt='watch' className='img-fluid ' style={{height:'100px',
width:'100px'
}} />
    </div>
    <div>
    <p> hi</p>
    <p>Size : hi</p>
    <p >Color : hi</p>
    </div>
    </div>
    <div  className='cart-col-2'>
    <h5 className='price'>$ 100</h5>
    </div>
    <div  className='cart-col-3 d-flex align-items-center gap-15'>
    <div><input type='number' className='form-control'
    min={1} max={10} />
    </div>
    <div><Link>delete</Link></div>
    </div>
    <div  className='cart-col-4'>
    <h5 className='price'>$ 100</h5>
    </div>
      </div>

     <div className='col-12 py-2 mt-4'>
<div className='d-flex justify-content-between align-items-baseline'>
<Link to='/product' className='btn btn-primary'>
Continue shopping</Link>
<div><h4>Sub total:$100</h4>
<p>Taxes and shipping calculated at checkout</p>
<Link to='/checkout' className='btn btn-primary'>Checkout</Link>
</div></div>
     </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Cart
