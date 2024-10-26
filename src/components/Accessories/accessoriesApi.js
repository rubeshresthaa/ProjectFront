import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const accessoriesApi=createApi({
  reducerPath:'accessoriesApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/accessories`}),
  tagTypes:['Accessories'],
  endpoints:(builder)=>({
    getAccessories:(builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Accessories']
    })),
    getAccessoriesById:(builder.query({
      query:(id)=>({
        url:`/${id}`,
        method:'GET'
      }),
      providesTags:['Accessories']
    })),
    addAccessories:(builder.mutation({
      query:(q)=>({
        url:'/',
        body:q.body,
        method:'POST',
        headers:{
          Authorization:q.token
        }
      }),
      invalidatesTags:['Accessories']
    })),
    removeAccessoriesById:(builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        method:'DELETE',
        headers:{
          Authorization:q.token
        }
      }),
      invalidatesTags:['Accessories']
    })),
    updateAccessories:(builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        body:q.body,
        headers:{
          Authorization:q.token
        },
        method:'PATCH'
      }),
      invalidatesTags:['Accessories']
    })),
    addReview:builder.mutation({
      query:(q)=>({
        url:`/reviews/${q.id}`,
        body:q.body,
        headers:{
          Authorization:q.token
        },
       method:"POST"
      }),
      invalidatesTags:['Accessories']
    })

  
  })
})

export const {useGetAccessoriesQuery,useGetAccessoriesByIdQuery,useAddAccessoriesMutation,useRemoveAccessoriesByIdMutation,useUpdateAccessoriesMutation,useAddReviewMutation}=accessoriesApi;