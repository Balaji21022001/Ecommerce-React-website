import React from 'react'
import mainbanner from './images/mainbanner1.jpg'
import subBanner from './images/subBanner.jpg'
import prod3 from './images/prod3.jpeg'
import logo1 from './images/logo1.jpg'
import ban from './images/ban.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo6 from './images/logo6.png'
import { Link } from 'react-router-dom';
import './indexmain.css'
import Blogcard from '../components/Blogcard'
import Productcards from '../components/Productcards'
import Specialprod from '../components/Specialprod'
import bat from './images/bat.jpeg'
import colorwatch from './images/colorwatch.jpeg'
import blackwatch from './images/blackwatch.jpeg'
import redshoe from './images/redshoe.jpeg'
import Container from '../components/Container'
import {useSelector } from 'react-redux'
import {  cartfile } from '../features/cart/cartSlice'
import Productcardsclone from '../components/Productcards clone'
import shirt from './images/white.jpg';
import premium from '../components/images/premium_photo-1690366917352-3bd8bc0a0761.jpeg'
import premimu2 from '../components/images/premium2.jpeg'
const Home = () => {
const itemmain = useSelector(cartfile)

return ( 
    <div> 
    <Container class1 = 'home-wrapper-1 py-5'>
    <div className='row'>
    <div className='col-6'>
    <div className='main-banner position-relative p-3'>
    <img src={mainbanner} alt='main-banner' className='img-fluid rounded-3'
     />
    <div className='main-banner-content position-absolute'>
    <h5>Special diwali offers!</h5>
    <h1>Upto 30% disount on purchase above <b>$2000</b></h1>
    <p>lIMITED STOCKS</p>
    <Link className='homebutton Button' to='/product'>Buy now</Link>
    </div>
 
    </div>
    </div>
    <div className='col-6'>
    <div className='d-flex gap-12 flex-wrap justify-content-between align-items-center'>
    <div className='small-banner position-relative p-3 '>
    <img src={subBanner} alt='main-banner' style={{height:'400px',width:'500px'}}
     className='img-fluid rounded-3'/>
    <div className='small-banner-content position-absolute'>
    <h5>Blue shirt</h5>
    <h1 className='w-50'>Trendy week!</h1>
    <p>$700.00</p>
      </div>
    </div>
    <div className='small-banner position-relative p-3 '>
    <img src={shirt} alt='main-banner' 
    style={{height:'400px',width:'500px'}}
     className='img-fluid rounded-3'/>
    <div className='small-banner-content position-absolute'>
    <h5>White shirt</h5>
    <h1>Makes feel better</h1>
    <p>$600</p>
      </div>
    </div>
    <div className='small-banner position-relative p-3'>
    <img src={premium} alt='main-banner' style={{height:'400px',width:'500px'}}
     className='img-fluid rounded-3'/>
    <div className='small-banner-content position-absolute'>
    <h5>Blueway</h5>
    <h1>On high demand</h1>
    <p className='text-dark'>$500 </p>
      </div>
    </div>
    <div className='small-banner position-relative '>
    <img src={premimu2} alt='main-banner' style={{height:'400px',width:'500px'}}
     className='img-fluid rounded-3'/>
    <div className='small-banner-content position-absolute'>
 <h5 className='text'>White tshirt </h5>
 
 <h1 className='text'>Limited stock</h1>
 <p className='text'>$350.00</p>
      </div>
    </div>
 
    </div>
     </div>
  {/*total row*/}
  </div>
    </Container>
   
 {/* home1 --*/}
<section className='home-wrapper-2 py-5'>
<div  className='container-xxl'>
<div className='row'>
<div className='col-12  d-flex flex-grow-column 
justify-content-between

 logos'  >
<div className='d-flex col-sm-2 align-items-center gap-10'>
<img src={logo1} alt='img' className='img-fluid p-10'
style={{height:'150px'}} />
</div>
<div  className='d-flex col-sm-2 align-items-center gap-8'>
<img src={ban} alt='img2'  className='img-fluid p-10' style={{height:'150px'}} />
</div>
<div  className='d-flex col-sm-2 align-items-center gap-8'>
<img src={logo3} alt='img2' className='img-fluid p-10'
style={{height:'150px'}} />
</div>
<div  className='d-flex col-sm-2 align-items-center gap-8'>
<img src={logo4} alt='img2'
className='img-fluid pl-10'
style={{height:'150px'}} />
</div>
<div  className='d-flex col-sm-2 align-items-center gap-8'>
<img src={logo6} className='img-fluid p-10'
 alt='img2'style={{height:'150px'}} />
</div>
</div>
</div>
</div>
</section>

<section className='famous-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<h1>Exciting gifts for Diwali!</h1>
<div className='col-3'>
<div className='famous-card position-relative'>
<img src={bat} alt='famous' className='img-fluid' style={{
 height:'650px', width:'800px'
}} />
<div className='famous-content position-absolute'>
<h6>Our latest collection</h6>
<h1>violet magic!</h1>
<p>From $599 onwards</p>
</div>
<h5 className='mt-1'>Products :10</h5>
<div className='progress mt-3'>
      <div class='progress-bar' style={{width:'25%'}}
      role='progressbar' aria-valuenow='65'
      aria-valuemin='0'
      aria-valuemax='100'>
      </div>
      </div>
</div>
</div>

<div className='col-3'>
<div className='famous-card position-relative'>
<img src={colorwatch} alt='famous' className='img-fluid' 
 style={{
  height:'650px', width:'500px'
 }} 
/>
<div className='famous-content position-absolute'>
<h6 >Our latest collection</h6>
<h1>violet magic!</h1>
<p>From $599 onwards</p>
</div>
<h5 className='mt-1'>Products :20</h5>
<div className='progress mt-3'>
      <div class='progress-bar' style={{width:'25%'}}
      role='progressbar' aria-valuenow='85'
      aria-valuemin='0'
      aria-valuemax='100'>
      </div>
      </div>
</div>
</div>

<div className='col-3'>
<div className='famous-card position-relative'>
<img src={blackwatch} alt='famous' className='img-fluid' 
 style={{ height:'650px', width:'500px' }} 
/>
<div className='famous-content position-absolute'>
<h6 className='text-white'>Huge demand</h6>
<h1 className='text-white'>White shirt</h1>
<p className='text-white'>From $499 onwards</p>
</div>
<h5 className='mt-1'>Products :30</h5>
<div className='progress mt-3'>
      <div class='progress-bar' style={{width:'25%'}}
      role='progressbar' aria-valuenow='65'
      aria-valuemin='0'
      aria-valuemax='100'>
      </div>
      </div>
</div>
</div>

<div className='col-3'>
<div className='famous-card position-relative'>
<img src={redshoe} alt='famous' className='img-fluid' 
 style={{
  height:'650px', width:'500px'
 }} 
/>
<div className='famous-content position-absolute'>
<h6>Our latest collection</h6>
<h1>For Diwali purchase!</h1>
<p>Above $2999 </p>
</div>
<h5 className='mt-1'>Products:50 </h5>
<div className='progress mt-3'>
      <div class='progress-bar' style={{width:'25%'}}
      role='progressbar' aria-valuenow='65'
      aria-valuemin='0'
      aria-valuemax='100'>
      </div>
      </div>
</div>
</div>
</div>
</div>
</section>

<section className='blog-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<div className='col-12'>
<h3 className='section-heading'> featured collections</h3>
</div>
<Productcardsclone />

</div>
</div>
</section>

<section className='special-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<div className='col-12'>
<h3 className='section-heading'>Speical products</h3>
</div>
</div>


<Specialprod />

</div>
</section>

<section className='popular-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<div className='col-12'>
<h3 className='section-heading'>our popular products</h3>
</div>
</div>

<Productcards />
</div>
</section>

{/*----*/}
<section className='blog-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
<div className='row'>
<div className='col-12'>
<h3 className='section-heading'> Our latest products</h3>
</div>
</div>
<Blogcard />
</div>
</section>
 {/*---finish 1 ----*/}

</div> )
 
}

export default Home
