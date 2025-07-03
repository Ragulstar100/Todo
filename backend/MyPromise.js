import { data } from "react-router-dom"
import { toast } from 'react-toastify';



export class MyPromise{


    constructor(code,data,msg,error){
        this.code=code
        this.data=data
        this.msg=msg
        this.error=error
    }

    /**
     * 
     * @returns {Boolean}
     */
    isInternalError(){
      return this.code&&this.error
    }

}

   export function errorPromise(code,error){
    return new MyPromise(code,undefined,undefined,error)
   }
   /**
    * 
    * @param {string} url 
    * @param {RequestInit} req 
    * @param {string} msg 
    * @returns {Mypromise}
    */

  
 export async function myPromiseFetch(url, req, msg) {
 // const loadingToast = toast.loading("Loading...");
 

  try {

 
    let response = await fetch(url,req);
      
    let resdata = await response.json()
    let code = response.status; 


    if (code!=200) {
     // toast.update(loadingToast, { render: code+" "+resdata?.error || "No Response", type: "error", isLoading: false ,closeOnClick:true });
      return errorPromise(code, resdata.error|| "No Response");
    }


    return new MyPromise(code, resdata, msg, null);
  } catch (error) {
   
   // toast.update(loadingToast, { render: "🚨 Failed to fetch:Server Not Connected", type: "error", isLoading: false, autoClose: 3000 });
    
    return errorPromise(undefined, "Failed To Fetch: "+error);
  }
}
