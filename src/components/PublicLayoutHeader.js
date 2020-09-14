import React from "react";
import log from "../../src/assets/logo.png";
import {  withRouter } from "react-router-dom";
import {
  NavItem,
  NavLink
} from "reactstrap";
import BACKGROUND from "../constant/backgroundColor";

class PublicLayoutHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container-fluid fixed-top-header">
        <nav
          className="navbar navbar-expand-sm p-lg-0 p-sm-0"
          style={BACKGROUND}
        >
          <NavItem className="nav-link text-white pr-4 pl-4 mr-lg-5 mr-25">
            <NavLink  href={`/`}>
              <img
                  src={log}
                  className="img-fluid mr-2 ml-2 logo-image"
                  alt="logo"
                  style={{ height: "36px" }}
              />
            </NavLink>
          </NavItem>
                <ul className="navbar-nav d-none d-sm-flex">
                  <li className="nav-item">
                    <NavItem>
                      <NavLink  target={"_blank"} className="text-decoration-underline">
                        Extended Team
                      </NavLink>
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavLink  target={"_blank"}  className="nav-link text-white text-decoration-underline  pr-4 pl-lg-4">
                      Technology
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  target={"_blank"}  className="nav-link text-white text-decoration-underline  pr-4 pl-lg-4">
                      E-Commerce
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  target={"_blank"}  className="nav-link text-white text-decoration-underline  pr-4 pl-lg-4">
                      Mobility
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  target={"_blank"}  className="nav-link text-white text-decoration-underline  pr-4 pl-lg-4">
                      Testing
                    </NavLink>
                  </li>
                </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(PublicLayoutHeader);
