import { useContext } from "react";
import { createContext } from "react";
import {toast} from 'react-toastify';

const _messageContext=createContext()

export const messageContext=()=>useContext(_messageContext)

export function MessageProvider({children}){

                            const msgBox=(code,msg)=>{
                                toastMsg(msg)
                            }
    
                            const msgErrorBox=(code,msg)=>{
                                toastMsgError(msg)
                            }
    
    
                            const toastMsg=(msg)=>{ 
                             toast.success(msg,{autoClose:false,position:"top-center"})
                             }  
    
                            const toastMsgError=(msg)=>{
                                toast.error(msg,{autoClose:false,position:"top-center"})
                            }
    

return <_messageContext.Provider value={{msgBox,msgErrorBox,toastMsg,toastMsgError}}>
{children}
</_messageContext.Provider>    
}
