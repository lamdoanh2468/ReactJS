import { NavLink } from "react-router-dom";
import styles from "../Navigations/Navigation.module.scss";
const navItems = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/posts",
    title: "Posts",
  },
  {
    to: "/contact",
    title: "Contact",
  },
  {
    to: "/privacy",
    title: "Privacy",
  },
];

function Navigations() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={item.to}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navigations;
