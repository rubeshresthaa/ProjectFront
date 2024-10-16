import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({baseUrl:`${baseUrl}/contacts`}),
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (q) => ({
        url: '/contact-submit',
        body: q,
        method: 'POST'
        
      }),
    }),
    getAllContact:builder.query({
      query:(q)=>({
        url:'/',
        method:'GET'

      }),
      providesTags:['Contacts']
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});


export const { useSubmitContactMutation,useGetAllContactQuery,useDeleteContactMutation } = contactApi;