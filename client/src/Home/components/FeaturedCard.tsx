import {MoveRight} from "lucide-react";

function FeaturedCard() {
  return (
    <section className="flex flex-col w-[450px] h-[500px] border px-4 py-4 font-Montserrat">
        <section className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Featured</h1>
            <span className="flex flex-row gap-2 text-primary items-center text-sm font-semibold">
            See More
            <MoveRight/>
            </span>
        </section>
    </section>
  )
}

export default FeaturedCard