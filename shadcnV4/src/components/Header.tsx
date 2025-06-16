import { Link } from "react-router";

function Header() {
  return (
    <header className="">
      <nav className="">
        <Link to="/" className="">
          Fashion Shop
        </Link>
        <button className=""> &#8801;</button>
      </nav>
    </header>
  );
}

export default Header;
