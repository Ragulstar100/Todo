
import { useState } from 'react';




function TextField(props) {
 
  return (
    
<div className={"relative w-80 bg-violet-400 p-1"}>
  <input
    type="text"
    placeholder=""
    className="peer w-full p-4 border-2 border-amber-500 rounded-xl outline-none bg-transparent placeholder-violet-600"
  />
  <label
    className="absolute -top-1/20 left-5 bg-transprant 
    text-[12px]
    transition-all duration-150 ease-in-out 
    peer-placeholder-shown:top-1/4
    peer-placeholder-shown:text-[15px]"
  >
    {props.label}
  </label>
</div>
  );
}

export default TextField;
