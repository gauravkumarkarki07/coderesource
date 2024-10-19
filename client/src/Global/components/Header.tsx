import SearchBar from "./SearchBar"

function Header() {
  return (
    <header className="w-full  font-Montserrat font-semibold">
      <nav className="flex flex-col">
        {/* Upper Part */}
        <section className="border-b px-4 py-1">
          <ul className="flex flex-row justify-between items-center max-w-[1280px] mx-auto">
            <li className="text-xl">Code Resource</li>
            <li>Social Links</li>
          </ul>
        </section>
        {/* Lower Part */}
        <section className="border-b px-4 py-2">
          <ul className="max-w-[1280px] mx-auto flex flex-row justify-between items-center">
            <li>
              <SearchBar/>
            </li>
            <section className="flex flex-row gap-4 items-center">
              <li>Home</li>
              <li>Popular</li>
              <li>More</li>
            </section>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Header