import { IconHeartFilled } from "@tabler/icons-react";

import React, { Component } from "react";

export default class extends Component {
    render() {
        return (
            <>
                <div className="bg-secondary text-white text-center pb-1 shadow-sm px-4 py-2">
                    <p>
                        Created{" "}
                        <i>
                            <IconHeartFilled />
                        </i>{" "}
                        by
                        <a
                            className="text-white fw-bold"
                            href="https://www.instagram.com/adityaeeeee/"
                        >
                            {" "}
                            Aditya
                        </a>
                    </p>
                </div>
            </>
        );
    }
}
