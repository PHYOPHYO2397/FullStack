import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-sky-400 p-4 text-white">
      {/* container mx-auto ;width auto
      middle justify between ,  */}

      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Fashion Shop
        </Link>
        <button className="block text-xl lg:hidden"> &#8801;</button>
      </nav>
    </header>
  );
}

export default Header;
