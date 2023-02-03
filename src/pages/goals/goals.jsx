import React from 'react'
import Cards from './cards/Card';
import './Style.css'
import Input from './Input';
const Goals = () => {
  return (
  <div className='continer'>
    <div >
      <div className='heading'>
          <h1 >Awesome! Let's find your Goal</h1>
           <p className='smalltext'> pick from the Options below</p>
    </div>
    <div>
      <Input/>
    </div >
    
    <div className='filter'>
    <p>100 Goals available </p>
    <i class="fa-regular fa-filter">x</i>
    </div>

    </div>
<div className='Line'></div>

<div className='display'>
<div className='cards'>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>

 </div>
 <div>
 <Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='every thing you need to focuse  on your post operation '/>
  

 </div>
 <div>
 <Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='everything you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='everything you need to focuse  on your post operation '/>
<Cards
  imgSrc='image.jpg' 
  imgAlt='' 
  title='i love my kidney' 
  description='everything you need to focuse  on your post operation '/>

 </div>


</div>




    </div>
  )
}

export default Goals;