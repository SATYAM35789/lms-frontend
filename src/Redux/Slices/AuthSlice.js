import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import {AxiosInstance} from "../../Helpers/axiosinstance";


const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || " ",
    data: localStorage.getItem('data') || {}
};

// Create Async Thunk for signup and login actions and we can go to thunk documentation for more details.
//  Now async thunks are used to handle asynchronous actions in Redux, such as making API calls. They allow you to dispatch actions before and after the asynchronous operation, making it easier to manage loading states and handle errors.
export const createAccount = createAsyncThunk("/auth/signup", async(data) => {
    try {
        const res =  axiosInstance.post("user/register", data)
        toast.promise(res , {
            loading: "Creating your account...",
            success: (data) => {
                return data?.data?.message // returning the message from the response data
            },
            error : "Failed to create account. Please try again."
        })

        return res.data; // returning the response data to be used in the fulfilled action

    } catch (error) {
        toast.error(error.response.data.message || "An error occurred during signup.")
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

// export const {} = authSlice.actions; 
export default authSlice.reducer;