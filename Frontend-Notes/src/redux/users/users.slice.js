import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access : localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    currentUser : undefined,
    isAuthenticated : null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=True
        },
        signInSucess:(state,action)=>{
            state.access = action.payload.access
            state.refresh = action.payload.refresh
            state.currentUser = action.payload;
            state.isAuthenticated = True;
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