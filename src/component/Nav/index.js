import { Link } from "react-router-dom";
import { useEffect } from "react";
const Nav = () => {
  useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);
  console.log(window.location.pathname);
  return (
    <>
      <nav className="seperator">
        <div>
          <Link to="/">
            <div className="logo">
              <p>RJ</p>
            </div>
          </Link>
        </div>
        <ul className="nav-link mobile-hide seperator">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
