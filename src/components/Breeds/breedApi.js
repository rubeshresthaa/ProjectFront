import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const breedApi=createApi({
  name:'breedApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/products`}),
  tagTypes:['Breeds'],
  endpoints:(builder)=>({
    getBreeds:builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Breeds']
    }),
    getBreedsById:builder.query({
      query:(id)=>({
        url:`/${id}`,
        method:'GET'
      }),
      providesTags:['Breeds']
    }),
    addBreeds:builder.mutation(({
      query:(q)=>({
        url:'/',
        body:q.body,
        headers:{
          Authorization:q.token
        },
        method:'POST'

      }),
      invalidatesTags:['Breeds']
      
    })),
    removeBreeds:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        headers:{
          Authorization:q.token
        },
        method:'DELETE'
      }),
      invalidatesTags:['Breeds']
    }),
    updateBreeds:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        body:q.body,
        headers:{
          Authorization:q.token

        },
        method:'PATCH'
      }),
      invalidatesTags:['Breeds']

    }),
    addReview: builder.mutation({
      query: (q) => ({
        url: `/reviews/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Breeds']
    }),
  })
})

export const {useGetBreedsQuery,
  useGetBreedsByIdQuery,
  useAddBreedsMutation,
  useRemoveBreedsMutation,
  useUpdateBreedsMutation,useAddReviewMutation }= breedApi;