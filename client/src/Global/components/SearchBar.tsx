import { Input } from '@/shadcn/components/ui/input';
import {SearchIcon} from 'lucide-react';

function SearchBar() {
  return (
    <section className='w-[250px] border rounded-lg flex flex-row gap-2 items-center h-[40px]'>
        <Input 
        className='w-[200px] focus-visible:outline-none focus-visible:ring-0 border-none shadow-none'
    placeholder='Search for resources'
        />
        <SearchIcon size={20}/>
    </section>
  )
}

export default SearchBar