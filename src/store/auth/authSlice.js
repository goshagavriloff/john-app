import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{accessToken:null,refreshToken:null,user:null},
    reducers:{
        setCredentials:(state,action)=>{
            const {accessToken,refreshToken}=action.payload;
            state.accessToken=accessToken;
            state.refreshToken=refreshToken;
        },
        logOut:(state,action)=>{
            state.user=null;
            state.accessToken=null;
            state.refreshToken=null;
        },
        setUserInfo:(state,action)=>{
            const {user}=action.payload;
            state.user=user;

        }
    }
});
export default authSlice.reducer;

export const {setCredentials,logOut,setUserInfo}=authSlice.actions;

export const selectCurrentToken=(state) => state.authSlice.accessToken;
export const selectCurrentRefreshToken=(state)=>state.authSlice.refreshToken;
export const selectCurrentUser=(state)=>state.authSlice.user;