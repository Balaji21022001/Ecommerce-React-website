import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Blogcard from '../components/Blogcard'

const Blog = () => {
  return (
    <div>
     <Breadcrumb  title='Blogs'/> 
     <div className='blog-wrapper home-wrapper-2 py-5'>
     <div className='container-xxl'>
     <div className='row'>
     <div className='col-3'>
     <div className='filter-card mb-3'>
     <h3 className='filter-title'>Find BY CATEGORIES</h3>
     <div>
     <ul className='ps-0'>
     <li>Shirts</li>
     <li>Tshirt &Track</li>
     <li >pant</li>
     <li >chudi</li>
     </ul>
     </div>
     </div>
     </div>
     <div className='col-9 mb-3'>
     <div className='row'>
      <Blogcard />   
      </div>
     </div>
    
     </div>
     </div>
     </div>
    </div>
  )
}

export default Blog
