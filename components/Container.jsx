import React from 'react'

const Container = (props) => {
  return (
    <div>
      <section className={props.class1}>
      <div className='container-xxl'>{props.children} </div>
      </section>
    </div>
  )
}

export default Container
