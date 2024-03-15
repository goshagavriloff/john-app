import React from 'react'

import RegisterForm from '../components/forms/RegisterForm';

import shareVideo from '../assets/video_preview.mp4';

const Register = () => {

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/65 backdrop-brightness-25'>
          <RegisterForm/>

        </div>
      </div>
    </div>
  )
}

export default Register