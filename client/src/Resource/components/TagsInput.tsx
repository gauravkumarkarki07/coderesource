import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { X } from 'lucide-react';

function TagsInput() {
    const[tags,setTags]=useState<string[]>([]);
    const[inputValue,setInputValue]=useState('');

    // Put the tags in array when pressed enter
    const handleKeyDown=(event:React.KeyboardEvent)=>{
      if(event.key==="Enter" && inputValue.trim())
      {
        event.preventDefault();
        setTags((prev)=>[...prev,inputValue.trim()]);
        setInputValue('');
      }
    }

    //Delete Tags
    const handleDelete=(tagToDelete:string)=>{
        setTags(tags.filter((tag)=>tag !==tagToDelete));
    }


  return (
    <section className="flex flex-col gap-2">
      <Input
        placeholder="Put ateast one tag"
        value={inputValue}
        onChange={e=>setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <section className="flex flex-row gap-3 text-white text-sm">

      {tags.length>0 &&
        tags.map((tag,index)=>(
          <span key={index} className="px-2 py-1 rounded-lg bg-blue-500 w-fit flex flex-row items-center gap-2">
              {tag}
              <X size={15} strokeWidth={4} className="hover:text-red-400" onClick={()=>handleDelete(tag)}/>
          </span>
        ))
      }
      </section>
    </section>
  )
}

export default TagsInput