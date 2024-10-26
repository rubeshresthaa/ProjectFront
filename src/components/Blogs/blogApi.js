import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const blogApi=createApi({
  reducerPath:'blogApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/blogs`}),
  tagTypes: ['Blogs'],
  endpoints:(builder)=>({
    getBlogs:builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Blogs']
    }),
    getBlogsById:builder.query({
      query:(id)=>({
        url:`/${id}`,
        method:'GET'
      }),
      providesTags:['Blogs']
    }),

    addBlog:builder.mutation({
      query:(q)=>({
        url:'/add-blog',
        body:q.body,
        method:'POST',
        headers:{
          Authorization:q.token
        }
      }),
      invalidatesTags:['Blogs']
    }),
    removeBlogById:builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Blogs']
    }),
    updateBlog:builder.mutation({
      query:(q)=>({
        url:`/${q.id}`,
        body:q.body,
        headers:{
          Authorization:q.token
        },
        method:'PATCH'
      }),
      invalidatesTags:['Blogs']
    })

  })
})

export const {useGetBlogsQuery,useGetBlogsByIdQuery,useAddBlogMutation,useRemoveBlogByIdMutation,useUpdateBlogMutation}=blogApi;