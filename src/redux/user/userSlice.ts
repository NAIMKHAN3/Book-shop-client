import {createSlice} from '@reduxjs/toolkit'

interface IUser {
    _id: string | null;
    email: string | null;
    name: string | null;
}
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