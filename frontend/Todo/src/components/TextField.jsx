
import { useState } from 'react';
import { context } from '../context/themeContext';




function TextField({className,value,onInput,label}) {
 

  const {getTheme}=context()

  return (
    
<div className={className+" relative p-1 bg-inherit"}>
  <input
    type="text"
    value={value}
    placeholder=""
    onInput={(e)=>{onInput(e.target.value)}}
    className={"w-full  peer p-3.5 border-2 border-blue-400 rounded-xl outline-none"}
  />
  <label
    className="absolute -top-1/20 left-5  
    text-[13px]  px-3
    transition-all duration-150 ease-in-out 
    peer-click:bg-blue-200
    peer-placeholder-shown:px-1
    peer-placeholder-shown:top-5
    peer-placeholder-shown:left-8
    peer-placeholder-shown:text-[15px] spec"
    theme={getTheme()}
  >
    {label}
  </label>
</div>
  );
}

export default TextField;
