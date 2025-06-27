import { data } from "react-router-dom"

class MyPromise{

    constructor(data,msg,error){
        this.data=data
        this.msg=msg
        this.error=error
    }

    isSucess(){
        return !this.data.error
    }
}

   export function errorPromise(error){
    return MyPromise(null,null,error)
   }

   export async function myPromiseFetch(url,req,msg){
        
          try{  
          let response= await fetch(url,req)
          let data = await response.json()
          return new MyPromise(data,msg,null)
          }
          catch(error){
            return errorPromise("Failed To Fetch:"+error) 
          }
    }