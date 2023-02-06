import React from 'react';
import medicine from '../../../../Assets/Images/twocapsule.jpg';
import {FiEdit} from 'react-icons/fi';
import './Subscription.css'

const Subscription = () => {
  return (
    <div className='med-div'>
      <div className='two-capsulebox' style={{backgroundImage: `url(${medicine})`}}>
        {/* <img src={medicine} alt="medicine" height={80} width={80}/> */}
      </div>
      <div className='text-area'>
      <h5>Bundle</h5>
      <h4>Reduce my Stress</h4>
      <h5>Every 15 days</h5>
      </div>
      <div className='edit-icon green'>
       <FiEdit size={20}/>
      </div>
    </div>
  )
}

export default Subscription;