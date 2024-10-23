import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

interface resourceForm{
    title:string;
    richText:string;
    tags:string;
}

function CreateResourceForm() {
    const{register,handleSubmit,formState:{errors}}=useForm<resourceForm>();

    // submit form
    const submitForm=(data:resourceForm)=>{
        console.log(data);
    }
  return (
    <section className="flex flex-col gap-6 max-w-[1280px] mx-auto px-4 py-4 w-full">
        <article className="flex flex-col gap-2">
            <h1 className="text-2xl">Create Resource</h1>
            <span className="text-sm text-gray-500">
                Create a resource that will be useful for you or for other people
            </span>
        </article>
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-6">
            <section className="flex flex-col gap-2">
                <Label>Title</Label>
                <Input
                    placeholder="Give your resource a title"
                    {...register('title',{required:"Title is required"})}
                />
                {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
            </section>
            <section>
                <Label>Description</Label>
            </section>
        </form>
    </section>
  )
}

export default CreateResourceForm