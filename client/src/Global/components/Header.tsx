import SearchBar from "./SearchBar";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import { Button } from "@/shadcn/components/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full  font-Montserrat font-semibold">
      <nav className="flex flex-col">
        {/* Upper Part */}
        <section className="border-b">
          <ul className="flex flex-row justify-between items-center max-w-[1280px] mx-auto px-4 py-1">
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
        <section className="border-b">
          <ul className="max-w-[1280px] mx-auto flex flex-row justify-between items-center px-4 py-2">
            <li>
              <SearchBar />
            </li>
            <section className="flex flex-row gap-4 items-center">
                <Link to={'/create-resource'}>
              <Button variant={'outline'} className="border-primary" type="button">
                Create Resource
              </Button>
                </Link>
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