export const setUser=(user)=>{
  localStorage.setItem('user',JSON.stringify(user))

}

export const getUserFromLocal=()=>{
   const user=localStorage.getItem('user')
   return user===null ? null :JSON.parse(user)
}

export const removeUserFromLocal =()=>{
  localStorage.clear()
}

export const setContact=(contact)=>{
  localStorage.setItem('contact', JSON.stringify(contact))
}

export const getContactFromLocal=()=>{
  const contact=localStorage.getItem('contact')
  return contact===null? [] : JSON.parse(contact)

}
export const removeContactFromLocal = (id) => {
  const contact = JSON.parse(localStorage.getItem('contact')) || [];
  const updatedContacts = contact.filter((con) => con._id !== id);
  localStorage.setItem('contact', JSON.stringify(updatedContacts));
};

export const setBlogs=(blog)=>{
  localStorage.setItem('blog', JSON.stringify(blog))
}

export const getBlogFromLocal=()=>{
  const blog=localStorage.getItem('blog')
  return blog===null? [] : JSON.parse(blog)
}

export const removeBlogFromLocal=(id)=>{
  const blog=JSON.parse(localStorage.getItem('blog')) || [];
  const updateBlogs=blog.filter((blo)=>blo.id !==id);
  localStorage.setItem('blog', JSON.stringify(updateBlogs))
}

export const setBreeds=(breeds)=>{
  localStorage.setItem('breeds',JSON.stringify(breeds))
}
export const getBreedFromLocal =()=>{
  const breeds=localStorage.getItem('breeds')
  return breeds===null?[]:JSON.parse(breeds)
}
export const removeBreedFromLocal=(id)=>{
  const breeds=JSON.parse(localStorage.getItem('breeds')) || [];
  const updateBreeds=breeds.filter((breed)=>breed.id!==id);
  localStorage.setItem('breeds',JSON.stringify(updateBreeds))
}