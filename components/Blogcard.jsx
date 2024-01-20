import React from 'react'
import shirt from './images/shirt.jpg'
import { Link } from 'react-router-dom'
import './indexmain.css'
import blueshirt from '../components/images/blueshirt.jpg'
import redshirt from '../components/images/redtshirt.jpeg'
import greenshirt from '../components/images/greenshirt.jpeg'

const Blogcard = () => {
  return (<div
     className='row d-flex justify-content-between'>
    <div className='col-3'>
      <div className='blog-card'>
      <div className='card-image'>
      <img src={shirt} alt='img/cart'
      className='img-fluid w-100'
       style={{height:'450px', width:'400px'}} />
      </div>
      <div className='blog-content'>
          <p className='date'>1 Dec,2022 </p>
          <h5 className='title'>Jean shirt</h5>
          <p className='desc'>premium linear fabric cotton collections!jean shirt
          at best quantity
          </p>
      <Link to='/blogs/:id' className='Button'>
      Read more</Link>
      </div>
    </div></div>

    
    <div className='col-3'>
      <div className='blog-card'>
      <div className='card-image'>
      <img src={blueshirt} alt='img/cart'
      className='img-fluid w-100'
       style={{height:'450px', width:'400px'}} />
      </div>
      <div className='blog-content'>
          <p className='date'>1 Dec,2022 </p>
          <h5 className='title'>Blue shirt</h5>
          <p className='desc'>premium linear fabric cotton collections!jean shirt
          at best quantity
          </p>
      <Link to='/blogs/:id' className='Button'>Read more</Link>
      </div>
    </div></div>

    
    <div className='col-3'>
      <div className='blog-card'>
      <div className='card-image'>
      <img src={redshirt} alt='img/cart'
      className='img-fluid w-100'
       style={{height:'450px', width:'400px'}} />
      </div>
      <div className='blog-content'>
          <p className='date'>1 Dec,2022 </p>
          <h5 className='title'>Red tshirt</h5>
          <p className='desc'>premium linear fabric cotton collections!jean shirt
          at best quantity
          </p>
      <Link to='/blogs/:id' className='Button'>Read more</Link>
      </div>
    </div></div>


    
    <div className='col-3'>
      <div className='blog-card'>
      <div className='card-image'>
      <img src={greenshirt} alt='img/cart'
      className='img-fluid w-100'
       style={{height:'450px', width:'400px'}} />
      </div>
      <div className='blog-content'>
          <p className='date'>1 Dec,2022 </p>
          <h5 className='title'>Green tshirt</h5>
          <p className='desc'>premium linear fabric cotton collections!jean shirt
          at best quantity
          </p>
      <Link to='/blogs/:id' className='Button'>Read more</Link>
      </div>
    </div></div>

  </div>)
}

export default Blogcard
