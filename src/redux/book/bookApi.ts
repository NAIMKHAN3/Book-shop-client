
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
        bookReview: builder.mutation({
            query: (data) => ({
                url: `/book/review-book/${data.id}`,
                method: 'POST',
                body: data.review,
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ['book']
        }),
        getBooks: builder.query({
            query: () => '/book/get-books'
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/get-single-book/${id}`,
            providesTags: ['book']
        }),
    })
})

export const { useImageUploadeMutation,useBookReviewMutation, useBookPostMutation, useGetBooksQuery, useGetSingleBookQuery } = bookApi;