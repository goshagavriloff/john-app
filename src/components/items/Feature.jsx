import React from 'react'

const Feature = ({title,year,type,description,img}) => {
  return (
	<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] px-[15px] md:px-0  border-[1px] border-white border-b-[#E0E0E0] py-[15px]' >
	  <div className='max-w-[344px] md:max-w-[246px] mt-[11px] rounded-md overflow-hidden'>
		<img className='w-full h-full' src={img}/>
	  </div>
	  <div>
		 <h3 className='font-bold text-[26px]'>{title}</h3>
                <div className='text-base md:text-lg flex flex-row mt-[17px] mb-[11px]'>
                        <div className='bg-dark text-white font-bold text-[18px] rounded-[16px] px-[10px] py-[3px]'> {year} </div>
                        <div className='pl-[26px] text-light text-[20px]'> {type} </div>
                </div>
                <p className='text-base'>{description}</p>

	  </div>
	</div>
  )
}

export default Feature
