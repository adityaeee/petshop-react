import React, { Component } from "react";
import heroImage from "../../assets/5200.jpg";
import LoadingAnimation2 from "../shared/components/Animation/LoadingAnimation2";
import LoadingAnimation3 from "../shared/components/Animation/LoadingAnimation3";

export default class extends Component {
    state = {
        isLoading: false,
        imageHero: "../../assets/5200.jpg",
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="container-fluid">
                    <div className="row w-100 mb-5">
                        <LoadingAnimation3 />
                    </div>
                </div>
            );
        }
        return (
            <div
                className="container-fluid"
                style={{ minHeight: "100dvh", display: "flex" }}
            >
                <div className="row w-100">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h1 className="text-primary">
                                🐾Having a pet is fun
                            </h1>
                            <p className="fw-semibold text-secondary">
                                Hurry up and choose the animal you want to{" "}
                                <span className="fw-bold">🐶adopt🐱</span>
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary fw-bold text-center text-white"
                            >
                                See the pets
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            className="rounded-2  img-fluid"
                            src={heroImage}
                            style={{ maxWidth: "100%", height: "auto" }}
                            alt="hero section"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
