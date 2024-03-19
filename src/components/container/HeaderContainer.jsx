import React from 'react'
import { NavLink } from 'react-router-dom'
import manPreview from '../../assets/man_preview.png';

const HeaderContainer = () => {
    return (
        <>
            <header className="py-[27px]">
                <div className="px-4 mx-auto max-w-[1152px]">
                    <nav>
                        <div className="flex justify-between items-center">
                            <NavLink className="text-lg font-bold" to="/john-app/profile">
                                JOHN
                            </NavLink>
                            <div className="lg:hidden">
                                <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                                    <svg className="block h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                JOHN
                            </NavLink>
                            <button className="navbar-close">
                                <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
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
            <section>
                <div className="px-4 mx-auto max-w-[1152px]">
                	<div className="flex items-start flex-col-reverse md:flex-row pt-[50px] pr-0 md:pt-[140px] md:pl-[140px]">
	    			<div className="max-w-[500px] pt-[10px]">
	    				<h1 className="font-bold text-4xl md:text-5xl text-center md:text-left text-balance leading-[3.75rem]">Hi, I am John, Creative Technologist</h1>
	    				<p className="my-10 text-base">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
	    				<button className="bg-primary px-5 pt-2 pb-4 font-medium text-white">Download Resume</button>
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

export default HeaderContainer
