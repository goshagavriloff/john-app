import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../../web/fakeapi/user/UserService';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../../store/auth/authSlice';

const ProfileForm = () => {
    const user=useSelector(selectCurrentUser);
    const accessToken=useSelector(selectCurrentToken);

    const handleLogout = (event) => {
        userService.logout(); 
    }
    useEffect(()=>{
        userService.getUser(accessToken);
    },[accessToken]);


    
    return (
        <div className="relative w-96 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={user?.avatar} alt="profile-picture" className='w-full h-full'/>
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {user?.name}
                </h4>
                <p className="block">
                    {user?.role}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 mx-auto d-flex">
                <Link to="/john-app/logout" className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={handleLogout}>Выйти из аккаунта</Link>
                <Link to="/john-app/" className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>На главную</Link>
                
  </div>
        </div>
    )
}

export default ProfileForm