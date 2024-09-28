export const setUser=(user)=>{
  localStorage.setItem('user',JSON.stringify(user))

}

export const getUserFromLocal=()=>{
   const user=localStorage.getItem('use')
   return user===null ? null :JSON.parse(user)
}

export const removeUserFromLocal =()=>{
  localStorage.clear()
}