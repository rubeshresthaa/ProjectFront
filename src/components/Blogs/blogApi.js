import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const blogApi=createApi({
  reducerPath:'blogApi',
  baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/blogs`}),
  tagTypes: ['Blogs'],
  endpoints:(builder)=>({
    getBlogs:(builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'
      }),
      providesTags:['Blogs']
    })),
    addBlog:(builder.mutation({
      query:(q)=>({
        url:'/add-blog',
        body:q.body,
        method:'POST',
        headers:{
          Authorization:q.token
        }
      }),
      invalidatesTags:['Blogs']
    })),
    removeBlog:(builder.mutation({
      query:(id)=>({
        url:`/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:['BLOGS']
    }))
  })
})

export const {useGetBlogsQuery,useAddBlogMutation,useRemoveBlogMutation}=blogApi;