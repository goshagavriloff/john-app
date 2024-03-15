
import { userRouter } from "./UserRouter";
import { logOut,setCredentials, setUserInfo } from "../../../store/auth/authSlice";
import store from "../../../store/store";

class UserService{

    login(email,password){         
        
        const url="https://api.escuelajs.co/api/v1/auth/login";
        const method="POST";
        const body=JSON.stringify({email,password});
        
        return userRouter
        .fetchAPI( url, method, body)
        .then(({statusCode,data})=>{

            if (statusCode===201){
                const accessToken=data.access_token;
                const refreshToken=data.refresh_token;
                store.dispatch(setCredentials({accessToken,refreshToken}));
            }


        });
        
    }
    
    logout(){
        store.dispatch(logOut()); 
    
    }
    
    register(name,email,password,avatar="https://yastatic.net/s3/home-static/_/nova/86019d6c.svg?inline"){
        const url="https://api.escuelajs.co/api/v1/users";
        const method="POST";
        const body=JSON.stringify({name, email, password, avatar});

        return userRouter
        .fetchAPI( url, method, body);
    }

    checkMail(email){
        const url="https://api.escuelajs.co/api/v1/users/is-available";
        const method="POST";
        const body=JSON.stringify({email});

        return userRouter
        .fetchAPI(url,method,body)
        .then(({statusCode,data})=>{
            if (statusCode===201){
                const isAvailable={data};
                return isAvailable;
            }
            return false;
        });
    }
    
    getUser(accessToken){
        const url="https://api.escuelajs.co/api/v1/auth/profile";
        const method="GET";
        const body=null;
        const headers={
            "Authorization": `Bearer ${accessToken}`
        };

        return userRouter
        .fetchAPI(url,method,body,headers)
        .then(({statusCode,data})=>{
            if (statusCode===200){
                const user=data;
                store.dispatch(setUserInfo({user}));
            }
        });
    }
    
    updateTokens(_refreshToken){
        const url="https://api.escuelajs.co/api/v1/auth/refresh-token";
        const method="POST";
        const body=JSON.stringify({refreshToken:_refreshToken});

        return userRouter
        .fetchAPI( url, method, body)
        .then(({statusCode,data})=>{

            if (statusCode===201){
                const accessToken=data.access_token;
                const refreshToken=data.refresh_token;
                store.dispatch(setCredentials({accessToken,refreshToken}));
            }


        });
    }

}

export const userService=new UserService();
