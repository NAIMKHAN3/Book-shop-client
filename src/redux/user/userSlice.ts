import {createSlice} from '@reduxjs/toolkit'
import { IUser } from '../../types/types';


const initialState: IUser = {
    _id: null,
    email: null,
    name: null

}
const userSlice = createSlice({
name: 'user',
initialState,
reducers: {}
})


export default userSlice.reducer;