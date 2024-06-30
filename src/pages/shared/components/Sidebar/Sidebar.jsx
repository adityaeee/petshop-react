import PropTypes from "prop-types";
import { Component } from "react";

import { IconApps, IconHome2 } from "@tabler/icons-react";
import Dashboard from "../../../Dashboard/Dashboard";
import Pets from "../../../Pets/Pets";

export default class Sidebar extends Component {
    render() {
        const { navigateTo } = this.props;
        return (
            <div
                className={"bg-primary text-white p-4 shadow"}
                style={{ width: 300, minHeight: "100dvh" }}
            >
                <div className="font-logo text-center mb-5">
                    <h2 className="fs-2">
                        <i>
                            <img
                                src="/src/assets/cat2.png"
                                alt="logo"
                                width="130"
                                height="130"
                                className="d-inline-block align-top"
                            />
                            <br></br>
                            <b>Mypet</b> Shop
                        </i>
                    </h2>
                    <h2 className="fs-6 my-4 font-primary fw-bold">
                        Adopt a cute pet to be your daily companion
                    </h2>
                </div>
                <nav>
                    <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
                        <p
                            onClick={() => navigateTo(<Dashboard />)}
                            className="fw-bold"
                        >
                            Dashboard
                        </p>
                        <li
                            className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true"
                            onClick={() => {
                                navigateTo(<Dashboard />);
                            }}
                        >
                            <i className="me-3">
                                <IconHome2 />
                            </i>
                            <span>Home</span>
                        </li>
                        <li
                            className="cursor-pointer text-white"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="true"
                            onClick={() => {
                                navigateTo(<Pets />);
                            }}
                        >
                            <i className="me-3">
                                <IconApps />
                            </i>
                            <span>All Pets</span>
                        </li>
                    </ul>
                    {/* <LoadingAnimation2 /> */}
                </nav>
            </div>
        );
    }
}

Sidebar.propTypes = {
    navigateTo: PropTypes.func,
};
