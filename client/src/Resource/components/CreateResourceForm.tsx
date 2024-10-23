import { Input } from "@/shadcn/components/ui/input"
import { Label } from "@/shadcn/components/ui/label"
import { Textarea } from "@/shadcn/components/ui/textarea";
import { Button } from "@/shadcn/components/button";
import { Controller, useForm } from "react-hook-form"
import TagsInput from "./TagsInput";
import ResourceComboBox from "./ResourceComboBox";

interface resourceForm{
    title:string;
    description:string;
    tags:string[];
    resource:string;
}

function CreateResourceForm() {
    const{register,handleSubmit,formState:{errors},control}=useForm<resourceForm>({
        defaultValues:{
            title:'',
            description:'',
            tags:[],
            resource:''
        }
    });

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
            <section className="flex flex-col gap-2">
                <Label>Description</Label>
                <Textarea
                    placeholder="Write a short description for your resource"
                    {...register('description',{required:"Description is required"})}
                    className="h-[100px] resize-none"
                />
                {errors.description && <span className="text-xs text-red-500">{errors.description.message}</span>}
            </section>
            <section className="flex flex-col gap-2">
                <Label>Tags</Label>
                <Controller
                    name="tags"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TagsInput
                          onChange={onChange}
                          onBlur={onBlur}
                          selected={value}
                        />
                      )}
                />
            </section>
            <section className="flex flex-col gap-2">
                <Label>Resource</Label>
                <Controller
                    name="resource"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <ResourceComboBox
                          onChange={onChange}
                          selected={value}
                        />
                      )}
                />
            </section>
            <Button className="w-[200px]">
                Save Resource
            </Button>
        </form>
    </section>
  )
}

export default CreateResourceForm