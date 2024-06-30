import React, { Component } from "react";
import LoadingAnimation1 from "../shared/components/Animation/LoadingAnimation1";

export default class extends Component {
    state = {
        category: "All",
        isLoading: false,
        pets: [
            {
                id: 1,
                name: "Max",
                category: "Dog",
                description:
                    "Max is a friendly and energetic Labrador Retriever, perfect for families with children.",
                image: "https://plus.unsplash.com/premium_photo-1686090449483-89a9b794e7cf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 2,
                name: "Whiskers",
                category: "Cat",
                description:
                    "Whiskers is a calm and affectionate Persian cat, loves to be pampered and brushed.",
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 3,
                name: "Bubbles",
                category: "Fish",
                description:
                    "Bubbles is a vibrant goldfish that brightens up any room. Easy to care for and great for beginners.",
                image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 4,
                name: "Pecky",
                category: "Bird",
                description:
                    "Pecky is a chirpy parakeet who loves to sing and interact with people. Perfect for bird enthusiasts.",
                image: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 5,
                name: "Hoppy",
                category: "Rabbit",
                description:
                    "Hoppy is a playful and cute bunny with a love for cuddles and carrots.",
                image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    };

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
        console.log(this.state.category);
    };

    getFilteredPets = () => {
        // this.showLoading();
        const { pets, category } = this.state;
        if (category === "All") {
            return pets;
        }
        return pets.filter((pet) => pet.category === category);
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2400);
    }

    render() {
        const filterPets = this.getFilteredPets();
        if (this.state.isLoading) {
            return <LoadingAnimation1 />;
        }

        return (
            <div>
                <div className="container ">
                    <div className="row text-center mb-3 bg-primary">
                        <div className="col">
                            <h2 className="text-light">Choose your Pets</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 ">
                            <span className="input-group-text bg-primary">
                                Category
                            </span>
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select mb-4 bg-light"
                                aria-label="Default select example"
                                onChange={this.handleCategoryChange}
                            >
                                <option selected>Select pets category</option>
                                <option value="All">All category</option>
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Fish">Fish</option>
                                <option value="Bird">Bird</option>
                                <option value="Rabbit">Rabbit</option>
                            </select>
                        </div>
                    </div>
                    {/* <LoadingAnimation1 /> */}
                    {(this.state.isLoading && <LoadingAnimation1 />) || (
                        <div className="row justify-content-center">
                            {filterPets.map((pet, i) => {
                                return (
                                    <div key={pet.id} className="col-md-4 mb-3">
                                        <div
                                            className="card"
                                            data-aos="flip-left"
                                            data-aos-duration="500"
                                        >
                                            <img
                                                src={pet.image}
                                                className="card-img-top"
                                                style={{
                                                    width: "100%",
                                                    height: "300px",
                                                    objectFit: "cover",
                                                }}
                                                alt={pet.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {pet.name}
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                                    {pet.category}
                                                </h6>
                                                <p className="card-text">
                                                    "{pet.description}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
