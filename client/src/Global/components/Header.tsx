import { NavLink } from "react-router-dom"

function Header() {
  return (
    <section className="px-4 py-4">
      <nav className="flex justify-between">
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