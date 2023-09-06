
import { api } from "../api/apiSlice";


const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        imageUploade: builder.mutation({
            query: (image) => ({
                url: '/file/upload',
                method: 'POST',
                body: image
            })
        }),
        bookPost: builder.mutation({
            query: (data) => ({
                url: '/book/create-book',
                method: 'POST',
                body: data.book,
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Content-Type': 'application/json',
                }
            })
        }),
    })
})

export const { useImageUploadeMutation, useBookPostMutation } = bookApi;