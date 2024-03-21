import React, { useState } from 'react'
import { userService } from '../../web/fakeapi/user/UserService';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        userService.login(email, password).then(() => {

            navigate('/john-app/', { replace: true });
        });

    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                <div className='p-5'>
                    {/* <img src={logo} width="300px" alt='logo' /> */}
                </div>
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-7 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Личный кабинет
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Ваш email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
                            <input type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-1 mr-2 text-sm">
                                    <label htmlFor="remember" className="">Запомнить меня</label>
                                </div>
                            </div>
                            <a href="https://fakeapi.platzi.com/en/rest/auth-jwt/" target="_blank" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Забыли пароль?</a>
                        </div>
                        <button type="submit" className="w-full text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Войти</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Нет аккаунта? 
                            <Link to="/john-app/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Зарегистрироваться</Link>

                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
