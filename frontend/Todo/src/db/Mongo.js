
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

export const signUp =async (name,password)=>{
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
  
   return await myPromiseFetch("http://localhost:5000/auth/register",req)
}

export const tasks = async (token) => {
  const req = {
    method: 'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  };

  return await myPromiseFetch("http://localhost:5000/task/read", req);
};

export const addTask = async (token,userId,status,description)=>{
  
  let task={
    userId:userId,
    status:status,
    description:description
  }

  const req = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body:JSON.stringify(task)
  };

  return await myPromiseFetch("http://localhost:5000/task/create", req);

}

export const updateTask = async (token,id,status,description)=>{
  
  let task={
    status:status,
    description:description
  }

  const req = {
    method: 'PATCH',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    body:JSON.stringify(task)
  };

  return await myPromiseFetch("http://localhost:5000/task/update/"+id, req);

}


export const deleteTask = async (token,id)=>{
  

  const req = {
    method: 'DELETE',
    headers: {
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  };

  return await myPromiseFetch("http://localhost:5000/task/delete/"+id, req);

}


