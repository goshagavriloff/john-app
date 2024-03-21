import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderContainer = () => {
    return (
        <>
            <header className="py-[27px]">
                <div className="px-4 mx-auto max-w-[1152px]">
                    <nav>
                        <div className="flex justify-between items-center">
                            <NavLink className="text-lg font-bold" to="/john-app/profile">
                                Profile
                            </NavLink>
                            <div className="lg:hidden">
                                <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                                    <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Mobile menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                    </svg>
                                </button>
                            </div>
                            <ul className="hidden lg:flex lg:ml-auto lg:mr-[60px] lg:items-center lg:w-auto lg:space-x-12">
                                <li><NavLink className="font-medium" to="/john-app/works">Works</NavLink></li>
                                <li><NavLink className="font-medium" to="/john-app/blog">Blog</NavLink></li>
                                <li><NavLink className="font-medium" to="/john-app/contact">Contact</NavLink></li>

                            </ul>

                        </div>
                    </nav>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <NavLink className="mr-auto text-2xl font-bold leading-none" to="/john-app/profile">
                                Profile
                            </NavLink>
                            <button className="navbar-close">
                                <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                
                                <li className="mb-1"><NavLink className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" to="/john-app/blog">Blog</NavLink></li>
                                <li className="mb-1"><NavLink className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" to="/john-app/contact">Contact</NavLink></li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </header>
	</>

    )

}

export default HeaderContainer
