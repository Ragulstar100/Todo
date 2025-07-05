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
    
    isSucess(){
      return this.code==200
    }
    
    isInternalError(){
      return this.code&&this.error
    }

}

   export function errorPromise(code,error,data){
    return new MyPromise(code,data,undefined,error)
   }
   /**
    * 
    * @param {string} url 
    * @param {RequestInit} req 
    * @param {string} msg 
    * @returns {Mypromise}
    */

  
 export async function myPromiseFetch(url, req, msg) {

  try {

    let response = await fetch(url,req);
      
    let resdata = await response.json()
    let code = response.status; 


    if (code!=200) {
      return errorPromise(code, resdata.error|| "No Response");
    }

    return new MyPromise(code, resdata, msg, null);
  } catch (error) {
    
    return errorPromise(undefined, "Failed To Fetch: "+error);
  }
}


   /**
    * 
    * @param {string} url 
    * @param {RequestInit} req 
    * @param {string} msg 
    * @returns {Mypromise}
    */
 export async function myPromiseFetch2(url, req, msg) {

  let response;

    try{
       response = await fetch(url,req);
    }catch(error){
      throw errorPromise("L404", "Failed To Fetch:"+error);
    }

    let jsonData=await response.json()
    if(response.status!=200) {
      if(jsonData.data){
      throw new MyPromise(response.status,jsonData.data,undefined,resdata.error|| "No Response")  
      }else{
      throw errorPromise(response.status, jsonData.error|| "No Response")   
      }
    }

    return new MyPromise(response.status,response.data, msg, null);

}


