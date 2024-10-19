import SearchBar from "./SearchBar"

function Header() {
  return (
    <header className="w-full">
      <nav className="flex flex-col">
        {/* Upper Part */}
        <section className="border-b px-4 py-4">
          <ul className="flex flex-row justify-between  max-w-[1280px] mx-auto">
            <li className="text-xl">Code Resource</li>
            <li>Social Links</li>
          </ul>
        </section>
        {/* Lower Part */}
        <section className="border-b px-4 py-2">
          <ul className="max-w-[1280px] mx-auto">
            <li>
              <SearchBar/>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Header