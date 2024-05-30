import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <ul className="flex justify-start m-3">
        <li>
          <Link to="/" className="link-base mx-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-base mx-2">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-base mx-2">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/posts" className="link-base mx-2">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/todos" className="link-base mx-2">
            Todos
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Root;
