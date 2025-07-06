import { createContext, useContext } from "react";
import * as db from "../db/Mongo"
import {toast} from 'react-toastify';
import { errorPromise, MyPromise } from "../MyPromise";
import { messageContext } from "./messageProvider";
import { aliases } from "@fortawesome/free-solid-svg-icons/fa0";
import { setToken } from "../db/localDb/Token";


const _errorContext=createContext()

export const errorContext= () => useContext(_errorContext)

export function ErrorProvider({children}){


                        const {msgBox,msgErrorBox,toastMsg,toastMsgError}=messageContext()

                        //Authcation
                        const signUp= async (name,pwd,repwd)=>{   

                            try{
                        

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

                              
                                if(p.isSucess()){
                                msgBox(200,"Sign In SucessFully")
                                return p.data.token
                                } 


                            }catch(e){
                             if(e.code){ 
                              msgErrorBox(e.code,e.error)
                             }{
                              msgErrorBox("L409",e)  
                             } 
                          }

                        }
                        
                        let login= async (name,pwd)=>{
                          try{
                              let p= await db.login2(name,pwd)
                                
                              if(p.isSucess()){
                                setToken()
                                return p.data.token
                              } 
                                
                          }catch(e){

                              console.log(e);
                              

                              if( e.code){ 
                              msgErrorBox(e.code,e.error)
                             }{
                              msgErrorBox("L409",e)
                             } 

                          }
                        }
                        
    return <_errorContext.Provider value={{signUp,login}}>
  {children}
    </_errorContext.Provider>    

}




