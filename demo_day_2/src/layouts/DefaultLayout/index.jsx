import Header from "../components/Header/index";
import Footer from "./components/Footer/index";
import Navigation from "../components/Nagivation/index";
import { Outlet } from "react-router";
function DefaultLayout() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
