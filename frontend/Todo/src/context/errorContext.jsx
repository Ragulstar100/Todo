import { createContext, useContext } from "react";
import * as db from "../db/Mongo"
import {toast} from 'react-toastify';
import { errorPromise, MyPromise } from "../MyPromise";
import { messageContext } from "./messageProvider";


const _errorContext=createContext()

export const errorContext= () => useContext(_errorContext)

export function ErrorProvider({children}){


                        const {msgBox,msgErrorBox,toastMsg,toastMsgError}=messageContext()

                        const signUp= async (name,pwd,repwd)=>{   

                            try{
                        

                              //Local Validation
                              if(name.trim()==""){
                                throw errorPromise("L400","Enter Name Correctly")
                              }
                              if(pwd.trim()==""){
                                 throw errorPromise("L400","Enter Pssword Correctly")
                              }
                              if(pwd!=repwd){
                                 throw errorPromise("L400","Password Not Matched")
                              }

                              var p=await db.signUp(name,pwd)  

                              
                              if(p){
                                msgBox(200,"Sign In SucessFully")
                                return p.data
                                } 

                            }catch(e){
                             if(e.code){ 
                              msgErrorBox(e.code,e.error)
                             }{
                              msgErrorBox("L409",e)  
                             } 
                              return e.data
                          }

                        }

                    

    return <_errorContext.Provider value={{signUp}}>
  {children}
    </_errorContext.Provider>    

}




