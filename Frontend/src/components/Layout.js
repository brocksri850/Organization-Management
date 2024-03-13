import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;