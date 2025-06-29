import { myPromiseFetch } from "../MyPromise";


export const login= async (name,password)=>{

  let user={
      userName:name,
      password:password
    }

  let req={
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(user)
  }
  
  return await myPromiseFetch("http://localhost:5000/auth/login",req)
}

export const tasks = async (token)=>{
    let req={
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
      'Authentation': `Bearer ${token}`
    }
  }

   return await myPromiseFetch("http://localhost:5000/task/read",req)

}