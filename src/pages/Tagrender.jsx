import React, { useState } from "react";
import { SmileTwoTone } from '@ant-design/icons';


const Tagrender = () => {
  const [text, setText] = useState({ icon:"", desc:"" });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={text.icon}
          onChange={(e) => setText({...text,icon:e.target.value})}
        />
        <select name="options" id="">
          
            <option value="smile"><SmileTwoTone /></option>
          
        </select>
        <input
          type="text"
          value={text.desc}
          onChange={ (e) => setText({...text,desc:e.target.value})}
        />
        <button onClick={(e)=>{e.preventDefault()}}>{text.icon+ text.desc }</button>
      </form>
    </div>
  );
};

export default Tagrender;
