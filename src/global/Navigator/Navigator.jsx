import { Fragment } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { joinCls } from "../../utilities/text.utils";
import Image from "../../components/Image/Image";
import Logo from "./images/Logo.png";
import Title from "./Title";
import style from "./style.module.css";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import { ABOUT_PAGE_PATH } from "../../pages/About/constants";
import { WORKS_PAGE_PATH } from "../../pages/Works/constants";

export const NAV_LINKS = [
  {
    name: "Home",
    path: HOME_PAGE_PATH,
    end: true,
  },
  {
    name: "Works",
    path: WORKS_PAGE_PATH,
  },
  {
    name: "About",
    path: ABOUT_PAGE_PATH,
  },
];

export default function Navigator() {
  const location = useLocation();

  return (
    <Fragment>
      <Title />

      <nav className={joinCls("navbar p-0", style["navbar"])}>
        <div className="container">
          <Link to={HOME_PAGE_PATH} className="navbar-brand d-flex align-items-center">
            <Image src={Logo} width={48} />
            <h4 className="m-0 text-primary">Passgenix</h4>
          </Link>

          <div className="row justify-content-end align-items-center">
            <div className="col-auto">
              <div className="collapse navbar-expand align-items-stretch">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-5">
                  {NAV_LINKS.map((navLink) => (
                    <li key={navLink.name} className="position-relative nav-item nav-element d-flex align-items-center h-100">
                      {navLink.children ? (
                        <>
                          <div
                            className={joinCls(
                              "nav-link dropdown-toggle h-100 d-flex align-items-center",
                              style["nav-link"],
                              matchPath(navLink.path, location.pathname) && "active"
                            )}
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            <div>{navLink.name}</div>
                          </div>
                          <div className="dropdown-menu rounded-0 p-0">
                            <ul className="list-group list-group-flush">
                              {navLink.children.map((subNavLink) => (
                                <NavLink to={subNavLink.path} key={subNavLink.name} className="list-group-item dropdown-item">
                                  {subNavLink.name}
                                </NavLink>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <NavLink to={navLink.path} end={navLink.end} className={joinCls("nav-link h-100 d-flex align-items-center", style["nav-link"])}>
                          <div>{navLink.name}</div>
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <button className={joinCls("navbar-toggler ps-5 pt-0 pe-0 pd-0", style["navbar-toggler"])} type="button" data-bs-toggle="collapse" data-bs-target=".navbar-expand">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
