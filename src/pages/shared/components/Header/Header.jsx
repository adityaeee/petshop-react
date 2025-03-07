import { Component } from "react";
import { IconSettings2 } from "@tabler/icons-react";

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end shadow-sm px-4 py-2">
                <button
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="btn btn-link"
                >
                    <img
                        className="rounded-circle cursor-pointer"
                        width={35}
                        height={35}
                        src="/src/assets/cat-lover.png"
                        alt="avatar"
                    />
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item-text">
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">Adityae</h6>
                            <span>adityae@duck.com</span>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <a className="dropdown-item" href="#">
                            <i className="me-2">
                                <IconSettings2 size={16} />
                            </i>
                            Sunting Profil
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
