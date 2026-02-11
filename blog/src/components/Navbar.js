import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={styles.brand}>
                        TI<span>Blog</span>
                    </NavLink>
                </li>
                <ul className={styles.links_list}></ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
}