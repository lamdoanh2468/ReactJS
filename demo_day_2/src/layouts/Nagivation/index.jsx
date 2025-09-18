import { NavLink } from "react-router-dom"
import styles from "../../layouts/Nagivation/Navigation.module.scss"
const navItems = [
{
    to: "/",
    title: "Home"
},
{
    to: "/news",
    title: "News"
},
{
    to: "/contact",
    title: "Contact"
}
]
function Navigation(){
    return  <ul>
            {/* //TODO NAV LINK AND LINK */}
            {/* <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
            {navItems.map((item,index)=>{
                return <li key={index}>
                    <NavLink className={({isActive})=>isActive?styles.active:""} to={item.to}>{item.title}
                    </NavLink>
                        </li>})}
            </ul> 
}
export default Navigation