import React, { useState } from 'react'
import { userService } from '../../web/fakeapi/user/UserService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate=useNavigate();

    const [formInput,setFormInput]=useState({
        login:"",
        email:"",
        password:"",
        password_repeat:"",
        remember:"", 
    });

    const [formError,setFormError]=useState({
        login:"",
        email:"",
        password:"",
        password_repeat:"",
    });

   const handleValidate=()=>{
        let inputError={
            login:"",
            email:"",
            password:"",
            password_repeat:"",
        };

        const {login,email,password,password_repeat}=formInput;

        const isValidLogin=((login.length>3 && login.length<20));
        const isValidPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

        const isValidConfimPassword=isValidPassword&(password===password_repeat);
        const promiseIsValidEmail=userService.checkMail(email);;

        return promiseIsValidEmail.then((IsValidEmail)=>{
            return new Promise((resolve,reject)=>{
                let textError="";

                if (!isValidLogin){
                    inputError.login = "Длина логина: 4-20 символов";
                    textError+="Validation error: length of login between 4 and 20 chars \n";
                  
                }
                
                if (!isValidPassword){
                    inputError.password="Пароль должен состоять из 8 символов: как минимум 1 латинская буква и 1 цифра";
                    textError+="Validation error: password must contain minimum eight characters, at least one letter and one number \n";
                  
                }

                if (!IsValidEmail){
                    //inputError.email="Данный email уже регистрирован";
                    //textError+="Validattion error: email is already registered  \n";
                  
                }

                if (!isValidConfimPassword){
                    inputError.password_repeat="Пароли должны совпадать";
                    textError+="Validation error: password did not equals \n";

                }
                setFormError(inputError);

                if (textError.length>0){
                    reject(textError);
                }
                resolve("Validation complete");
            });

        });
        
   }
   

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents default form submission behavior
      const {login,email,password}=formInput;

      handleValidate()
      .then(()=>userService.register(login,email,password))
      .then(()=>navigate('/john-app/login'))
      .catch((err)=>{
        console.log(err);
      });

    }
    const handleUserInput=({target})=>{
        const {name,value}=target;
        setFormInput({
            ...formInput,
            [name]:value
        });
    }

    return (

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Регистрация
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 ">Логин</label>
                            <input 
                            type="text" 
                            name="login" 
                            id="login" 
                            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="логин" 
                            required=""
                            value={formInput.login}
                            onChange={handleUserInput}
                             />
                             <p className="text-sm text-red-500">{formError.login}</p>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Ваш email</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@company.com" 
                            required=""
                            value={formInput.email}
                            onChange={handleUserInput} />
                            <p className="text-sm text-red-500">{formError.email}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Пароль</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required=""
                            value={formInput.password}
                            onChange={handleUserInput} />
                            <p className="text-sm text-red-500">{formError.password}</p>
                        </div>
                        <div>
                            <label htmlFor="password_repeat" className="block mb-2 text-sm font-medium text-gray-900 ">Подтвердить пароль</label>
                            <input 
                            type="password" 
                            name="password_repeat" 
                            id="password_repeat" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required=""
                            value={formInput.password_repeat}
                            onChange={handleUserInput} />
                            <p className="text-sm text-red-500">{formError.password_repeat}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                    id="remember" 
                                    aria-describedby="remember" 
                                    type="checkbox" 
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                    required={true}
                                    value={formInput.remember}
                                    onChange={handleUserInput} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="">Согласие на обработку персональных данных</label>
                                </div>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Сохранить</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm