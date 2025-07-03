
import { useState } from 'react';




function TextField({className,value,onInput,label}) {
 
  return (
    
<div className={className+" relative p-1"}>
  <input
    type="text"
    value={value}
    placeholder=""
    onInput={(e)=>{onInput(e.target.value)}}
    className={"w-full h-full peer p-3.5 border-2 border-blue-400 rounded-xl outline-none  h-max"}
  />
  <label
    className="bg-inherit absolute -top-1/20 left-5  
    text-[13px]  px-1
    transition-all duration-150 ease-in-out 
    peer-placeholder-shown:top-5
    peer-placeholder-shown:left-8
    peer-placeholder-shown:text-[15px]"
  >
    {label}
  </label>
</div>
  );
}

export default TextField;
