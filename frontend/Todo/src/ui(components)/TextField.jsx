
import { useState } from 'react';




function TextField(props) {
 
  return (
    
<div className={"relative w-80 p-1"}>
  <input
    type="text"
    placeholder=""
    onInput={(e)=>{props.onInput(e.target.value)}}
    className="peer w-full p-3.5 border-2 border-blue-400 rounded-xl outline-none bg-transparent placeholder-violet-600"
  />
  <label
    className="absolute -top-1/20 left-5 bg-transprant 
    text-[13px] bg-white px-1
    transition-all duration-150 ease-in-out 
    peer-[focus]:text-amber-500
    peer-placeholder-shown:top-5
    peer-placeholder-shown:left-8
    peer-placeholder-shown:text-[15px]"
  >
    {props.label}
  </label>
</div>
  );
}

export default TextField;
