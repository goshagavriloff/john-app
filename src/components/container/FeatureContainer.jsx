import React from 'react'
import Feature from '../items/Feature';
import feature_1 from '../../assets/feature_1.png';
import feature_2 from '../../assets/feature_2.png';
import feature_3 from '../../assets/feature_3.png';

const FeatureContainer = () => {
  const features=[
	{
		title:'Designing Dashboards',
		year:'2020',
		type:'Dashboard',
		description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		img: feature_1
	},
	{
		title:'Vibrant Portraits of 2020',
		year:'2018',
		type:'Illustration',
		description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		img: feature_2
	},
	{
		title: '36 Days of Malayalam type',
		year: '2018',
		type: 'Typography',
		description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		img: feature_3
	}

  ];
  return (
	  <div className='mx-auto max-w-[863px] md:pl-[1rem] pt-[13px]'>
	  	<h2 className='text-[22px] leading-[3.75rem] text-[#21243D] text-center md:text-left'> 
	  		Featured works
	  	</h2>
	  <div className=''>
	  	{features?.map(({title,year,type,description,img})=><Feature title={title} year={year} type={type} description={description} img={img}/>)}
	  </div>
	  	
	  </div>
  )
}

export default FeatureContainer
