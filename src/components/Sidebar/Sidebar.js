import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={"white"}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a href="/" className="simple-text logo-normal">
          <div className="logo-img">
            <img
              src={require("assets/img/logo.jpg").default}
              alt="A2Zfin-logo"
            />
          </div>
        </a>
      </div>
      <div>
        <p style={{ color: "white" }}>connect Wallet</p>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                {prop.isExternal ? (
                  <a href={prop.path} className="nav-link">
                    <i>
                      <ion-icon className="nc-icon" name={prop.icon}></ion-icon>
                    </i>
                    <p>{prop.name}</p>
                  </a>
                ) : (
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i>
                      <ion-icon className="nc-icon" name={prop.icon}></ion-icon>
                    </i>
                    <p>{prop.name}</p>
                  </NavLink>
                )}
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
