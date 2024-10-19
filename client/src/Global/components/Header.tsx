import { NavLink } from "react-router-dom"

function Header() {
  return (
    <section className="w-full border-b">
      <nav className="flex justify-between max-w-[1280px] mx-auto px-4 py-4">
        <ul>
          <li>CodeResource</li>
        </ul>
        <ul>
          <li>
            <NavLink to={'/home'}> 
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Header