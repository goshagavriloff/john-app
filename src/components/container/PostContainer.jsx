import React from 'react'
import Post from '../items/Post';
const PostContainer = () => {
  const posts=[
	{
		title:'Making a design system from scratch',
		date:new Date(2020,2,12),
		topics:['Design', 'Pattern'],
		description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
	},
	   {
		title:'Creating pixel perfect icons in Figma',
		date: new Date(2020,2,12),
		topics:['Figma','Icon Design'],
		description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
	   }
  ];
  
  return (
 <div className='bg-[#EDF7FA] mt-[73px] pb-[34px]'>
	  <div className='mx-auto max-w-[863px] md:pl-[1rem]'>
	  	<div className='flex justify-between items-center'>
	  		<h2 className='w-full md:w-auto text-[22px] leading-[3.75rem] text-[#21243D] text-center' >
	  			Recent posts
	  		</h2>
	  		<div className='hidden md:block text-base cursor-pointer text-secondary ' >
	  			View all
	  		</div>
	  	</div>
	  	<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
	  	{ posts?.map(({title,date,topics,description})=><Post title={title} date={date} topics={topics} description={description}/>	  )}
	</div>	
	  	</div>
  </div>
  );
}

export default PostContainer
