import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigations from "../../components/Navigations";
import styles from "./DefaultLayout.module.scss";
function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Navigations />
      </div>

      <div className={styles.defaultLayout}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
export default DefaultLayout;
