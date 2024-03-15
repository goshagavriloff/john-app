
class UserRouter{
    fetchAPI( url, method, body,headers={}){
        return fetch(url,{
            method,
            body,
            "headers": {
                'Content-Type': 'application/json;charset=utf-8',
                ...headers
              },
        }).then(async (responce)=>{
            const data=await responce.json();
            const statusCode=responce.status;

            return {data,statusCode};
        });
    
    };

}

export const userRouter=new UserRouter();