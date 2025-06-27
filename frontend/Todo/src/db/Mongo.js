import { myPromiseFetch } from "../MyPromise";


export const login2= async (name,password)=>{

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

