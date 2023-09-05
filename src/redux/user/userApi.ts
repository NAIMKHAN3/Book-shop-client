import { IUser } from "../../types/types";
import { api } from "../api/apiSlice";

type UserLogin = {
    email: string,
    password: string,
}
const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user: IUser) => ({
                url: '/register',
                method: 'POST',
                body: user
            })
        }),
        loginUser: builder.mutation({
            query: (user: UserLogin) => ({
                url: '/login',
                method: 'POST',
                body: user
            })
        }),
    })
})

export const {useRegisterUserMutation} = userApi;