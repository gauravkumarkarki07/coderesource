import { Button } from "@/shadcn/components/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/shadcn/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/components/ui/popover"
import { cn } from "@/shadcn/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react"

function ResourceComboBox() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className="w-[200px] justify-between"
                    type="button"
                >
                    {value ? resources.find((resource) => resource.value === value)?.label
                        : <span className="text-gray-500">Select Resource</span>
                    }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput placeholder="Search Resources ..." />
                    <CommandList>
                        <CommandEmpty>No Resources Found</CommandEmpty>
                        <CommandGroup>
                            {resources.length > 0 &&
                                resources.map((resource, index) => (
                                    <CommandItem
                                        key={index}
                                        value={resource.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === resource.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {resource.label}
                                    </CommandItem>
                                ))
                            }
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default ResourceComboBox

const resources = [
    {
        value: 'githubrepo',
        label: 'GitHub Repo'
    },
    {
        value: 'bloglink',
        label: 'Blog Link'
    },
    {
        value: 'websitelink',
        label: 'Website Link'
    },
    {
        value: 'youtubevideo',
        label: 'Youtube Video'
    }
]