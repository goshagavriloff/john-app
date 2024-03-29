import React from 'react'
import {FaFacebookSquare, FaInstagram,FaTwitter, FaLinkedin} from 'react-icons/fa';


const FooterContainer = () => {
  return (
    <div class="px-4 mt-[120px] mx-auto max-w-[1152px]">
	  <div class='flex flex-row justify-center items-center'>
	  	<FaFacebookSquare className='mr-[35px]'/>
	  	<FaInstagram className='mr-[35px]'/>
		<FaTwitter className='mr-[35px]'/>
	  	<FaLinkedin />
	  </div>
	  <p className='text-center text-sm mt-[26px]'>Copyright @2020 All rights reserved </p>
  </div>
  )
}

export default FooterContainer
