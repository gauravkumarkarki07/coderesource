import FeaturedCard from "../components/Featured"
import LatestCard from "../components/LatestResource"

function Index() {
  return (
    <section className="max-w-[1280px] mx-auto w-full py-4 px-4">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between gap-6 w-full">
        <FeaturedCard/>
        <LatestCard/>
      </section>
    </section>
  )
}

export default Index