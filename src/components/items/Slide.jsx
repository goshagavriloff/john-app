import React from 'react'
import manPreview from '../../assets/man_preview.png';

const Slide = () => {
    return (
        <>
            <section>
                <div className="px-4 mx-auto max-w-[1152px]">
                	<div className="flex items-start flex-col-reverse md:flex-row pt-[50px] pr-0 md:pt-[140px] md:pl-[148px]">
	    			<div className="max-w-[500px] pt-[10px]">
	    				<h1 className="font-bold text-4xl md:text-5xl text-center md:text-left text-balance leading-[3.75rem]">Hi, I am John, Creative Technologist</h1>
	    				<p className="my-10 text-base">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
	    				<button className="block mx-auto md:mx-0 bg-primary px-5 pt-2 pb-4 font-medium text-white">Download Resume</button>
	    			</div>
	    			<div className='w-full'>
 					<img className="mx-auto my-0 w-[180px] md:w-[243px] shadow-[-13px_19px_0_0_rgba(237,247,250,1)] rounded-full"  src={manPreview}/>                       
	    			</div>
	    		</div>
	    	</div>
            </section>
        </>

    )

}

export default Slide
