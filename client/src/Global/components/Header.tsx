import SearchBar from "./SearchBar";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

function Header() {
  return (
    <header className="w-full  font-Montserrat font-semibold">
      <nav className="flex flex-col">
        {/* Upper Part */}
        <section className="border-b px-4 py-1">
          <ul className="flex flex-row justify-between items-center max-w-[1280px] mx-auto">
            <li className="text-xl text-primary">Code Resource</li>
            {/* Social Icons */}
            <section className="flex flex-row gap-4">
              <li className="w-[20px] h-[20px]">
                <img
                  src={facebookIcon}
                  className="w-full h-full rounded-full overflow-clip object-cover"
                />
              </li>
              <li className="w-[20px] h-[20px]">
                <img
                  src={instagramIcon}
                  className="w-full h-full rounded-full overflow-clip object-contain"
                />
              </li>
              <li className="w-[20px] h-[20px]">
                <img
                  src={twitterIcon}
                  className="w-full h-full rounded-full overflow-clip object-contain"
                />
              </li>
            </section>
          </ul>
        </section>
        {/* Lower Part */}
        <section className="border-b px-4 py-2">
          <ul className="max-w-[1280px] mx-auto flex flex-row justify-between items-center">
            <li>
              <SearchBar />
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