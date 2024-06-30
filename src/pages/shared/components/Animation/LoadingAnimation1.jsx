import animation from "../../../../assets/animations/animation1.json";

import Lottie from "lottie-react";

const LoadingAnimation = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <span style={{ width: 200 }}>
                <Lottie animationData={animation} />
            </span>
        </div>
    );
};

export default LoadingAnimation;
