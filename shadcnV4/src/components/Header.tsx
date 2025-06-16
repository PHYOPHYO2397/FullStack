import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-sky-400 p-4 text-white">
      {/* container mx-auto ;width auto
      middle justify between ,  */}

      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Fashion Shop
        </Link>
        <button className="block text-xl text-white lg:hidden">&#8801;</button>
        {/*Nav for Desktop view  */}
        <ul className="hidden space-x-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
