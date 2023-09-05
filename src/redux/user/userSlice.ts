import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../types/types';


const initialState: IUser = {
    _id: null,
    email: null,
    name: null,

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSet: (state, action) => {
            state._id = action.payload._id;
            state.email = action.payload.email;
            state.name = action.payload.name;
            localStorage.setItem('user', JSON.stringify(action.payload))
        }
    }
})

export const { userSet } = userSlice.actions
export default userSlice.reducer;