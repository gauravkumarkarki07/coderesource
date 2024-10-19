import { MoveRight } from "lucide-react"

function LatestCard() {
  return (
    <section className="flex flex-col border h-[500px] w-full px-4 py-4">
        <section className="flex flex-row justify-between">
                <h1 className="text-lg font-semibold">Latest Resources</h1>
                <span className="flex flex-row gap-2 text-primary items-center text-sm font-semibold">
                    See All
                    <MoveRight/>
                </span>
            </section>

    </section>
  )
}

export default LatestCard