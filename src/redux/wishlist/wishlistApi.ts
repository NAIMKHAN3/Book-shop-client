import { api } from "../api/apiSlice";

const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addWishlist: builder.mutation({
            query: (data) => ({
                url: `/wishlist/create-wishlist`,
                method: 'POST',
                body: data.wishlist,
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

export const {useAddWishlistMutation} = wishlistApi;