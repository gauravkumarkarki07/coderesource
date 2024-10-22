import { MoveRight } from "lucide-react"
import PostCard from "./PostCard"

function LatestCard() {
  return (
    <section className="flex flex-col gap-6 border h-[500px] w-full px-4 py-4 overflow-clip">
      <section className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">Latest Resources</h1>
        <span className="flex flex-row gap-2 text-primary items-center text-sm font-semibold">
          See All
          <MoveRight />
        </span>
      </section>
      {/* Content */}
      <PostCard/>
      <PostCard/>
    </section>
  )
}

export default LatestCard