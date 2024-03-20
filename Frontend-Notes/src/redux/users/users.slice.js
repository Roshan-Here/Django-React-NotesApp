import { createSlice } from "@reduxjs/toolkit";

const getinitialState =()=> ({
    access : localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    currentUser : undefined,
    isAuthenticated : null,
    loading: false,
    error: null,
})

const userSlice = createSlice({
    name: 'user',
    initialState:getinitialState(),
    reducers:{
        signInStart:(state)=>{
            state.loading=true
        },
        signInSucess:(state,action)=>{
            console.log(action.payload.access)
            console.log(state.access)
            localStorage.setItem('access',action.payload.access)
            state.access = action.payload.access
            state.refresh = action.payload.refresh
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        signinFailure:(state,action)=>{
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.access = null;
            state.refresh = null;
            state.isAuthenticated = false;
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {signInStart,signInSucess,signinFailure} = userSlice.actions
export default userSlice.reducer