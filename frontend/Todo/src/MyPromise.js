import { data } from "react-router-dom"
import { toast } from 'react-toastify';



class MyPromise{

    constructor(code,data,msg,error){
        this.code=code
        this.data=data
        this.msg=msg
        this.error=error
    }

    isSucess(){
        return !this.data.error
    }
}

   export function errorPromise(code,error){
    return new MyPromise(null,null,null,error)
   }
   /**
    * 
    * @param {string} url 
    * @param {Request} req 
    * @param {string} msg 
    * @returns {Mypromise}
    */
 export async function myPromiseFetch(url, req, msg) {
  const loadingToast = toast.loading("Loading...");

  try {
    let response = await fetch(url, req);
    let resdata = await response.json(); // Don't forget to await
    let code = response.status;


    if (!resdata.data) {
      toast.update(loadingToast, { render: resdata?.error || "No Response", type: "error", isLoading: false, autoClose: 3000 });
       
      return errorPromise(code, resdata?.error || "No Response");
    }

    return new MyPromise(code, resdata.data, msg, null);
  } catch (error) {
    toast.update(loadingToast, { render: "🚨 Failed to fetch", type: "error", isLoading: false, autoClose: 3000 });
    
    return errorPromise(null, "Failed To Fetch: ");
  }
}
