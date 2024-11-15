import React from 'react'
import { testimonials } from '../../constants/data'

const BelowHS = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="img-box flex items-center ">
            {testimonials.map((item, idx) => (
              <img src={item.image} alt="pictures" key={idx} className='object-cover w-[7rem] h-[7rem] rounded-full border-[0.2rem]'/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BelowHS