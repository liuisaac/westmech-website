import React from "react";

const Programs = () => {
    return (
        <section className="w-screen flex-col-centered">
            <header className="w-[80vw] flex-row-centered mt-10">
                <p className="w-full flex-row-start text-9xl font-medium tracking-tighter">
                    New to Robotics?{" "}
                    <span className="text-[#017FE0] ml-8">Start Here.</span>
                </p>
            </header>
            <p className="w-[80vw] text-3xl mt-2 tracking-tighter">
                Join our intro classes (robotics 101 - 1 day trial)
            </p>
            <figure></figure>
            <div className="w-[80vw] h-full flex-row-end text-xl font-medium mt-[50vh]">
                <button className="hover:text-[#017FE0] transition duration-500 ease-in-out">
                    See all Programs →
                </button>
            </div>
        </section>
    );
};

export default Programs;
