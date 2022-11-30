import { Outlet, Link } from "react-router-dom";
import Footer from '../views/Footer';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer></Footer>
    </>
  )
};

export default Layout;