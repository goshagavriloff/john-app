import React from 'react'

const Post = ({title,date,topics,description}) => {

  const formatDate = (date)=>{
	  const stringDate=date.toDateString();
	  const [dayWeek,month,day,year]=stringDate.split(" ");

	  return `${day} ${month} ${year}`;
  
}

  return (
    	<div className="bg-white mx-[10px] md:m-0 pt-[24px] pl-[23px] pr-[21px] pb-[28px]">
	  	<h3 className='font-bold text-[26px]'>{title}</h3>
	  	<div className='text-base md:text-lg flex flex-row mt-[17px] mb-[11px]'>
	  		<div className='pr-[24px] border-[1px] border-white border-r-black'> {formatDate(date)} </div>
	  		<div className='pl-[24px] '> {topics.join(', ')} </div>
	  	</div>
		<p className='text-base'>{description}</p>
	</div>
  )
}

export default Post
