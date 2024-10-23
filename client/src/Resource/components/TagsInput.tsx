import { Input } from "@/shadcn/components/ui/input"
import React, { useState } from "react"
import { X } from 'lucide-react';

type TagsInputProps = {
  onChange: (tags: string[]) => void
  onBlur: () => void;
  selected: string[];
}

function TagsInput({ onChange, onBlur, selected }: TagsInputProps) {
  const [inputValue, setInputValue] = useState('');

  // Put the tags in array when pressed enter
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault();
      const newTags = [...selected, inputValue.trim()];
      onChange(newTags);
      setInputValue('');
    }
  }

  //Delete Tags
  const handleDelete = (tagToDelete: string) => {
    const newTags = selected.filter((tag) => tag !== tagToDelete);
    onChange(newTags);
  }


  return (
    <section className="flex flex-col gap-2">
      <Input
        placeholder="Put at least one tag"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
      />
      <section className="flex flex-row gap-3 text-white text-sm">
      {selected.length > 0 &&
          selected.map((tag, index) => (
            <span key={index} className="px-2 py-1 rounded-lg bg-blue-500 w-fit flex flex-row items-center gap-2">
              {tag}
              <X size={15} strokeWidth={4} className="hover:text-red-400" onClick={() => handleDelete(tag)} />
            </span>
          ))}
      </section>
    </section>
  )
}

export default TagsInput