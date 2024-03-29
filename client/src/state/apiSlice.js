import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
    reducerPath: 'api',
    tagTypes: ['User'],
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (body) => ({
                url: '/api/v1/users/auth',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                headers: {
                    'Content-Type': 'application/json',
                },
                url: '/api/v1/users/login',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});


export const { useCreateUserMutation, useLoginUserMutation } = api;