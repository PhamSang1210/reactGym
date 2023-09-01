import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../../assets/img/dumble.png";
const cx = classNames.bind(styles);

const nav_links = [
    {
        path: "#",
        display: "Home",
    },
    {
        path: "#",
        display: "Schedule",
    },
    {
        path: "#",
        display: "Classes",
    },
    {
        path: "#",
        display: "Pricing",
    },
];

function Header() {
    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("nav__wrapper")}>
                    {/* // ! Logo  */}
                    <div className={cx("logo")}>
                        <div className={cx("logo_img")}>
                            <img
                                className={cx("logo__img-df")}
                                src={logo}
                                alt=""
                            />
                        </div>
                        <h2 className={cx("heading")}>Fitbody</h2>
                    </div>

                    {/* // ! Nav */}
                    <nav className={cx("nav")}>
                        <ul className={cx("menu")}>
                            {nav_links.map((item, index) => (
                                <li key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* // ! Nav right  */}
                    <div className={cx("nav__right")}>
                        <button className={cx("register__btn")}>
                            Register
                        </button>
                        <span className={cx("mobile__menu")}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
