import React from "react";
import GirlPowered from "./slides/GirlPowered";
import OneDayTrial from "./slides/OneDayTrial";
import SummerCamp from "./slides/SummerCamp";

const Carousel = () => {
    return (
        <div className="w-screen my-10 mb-32">
            <article className="w-screen flex flex-row items-center justify-start gap-10">
                <GirlPowered />
                <OneDayTrial />
                <SummerCamp />
            </article>
            <h3 className="w-[80vw] flex flex-row items-center justify-center text-black text-4xl gap-5 mt-24">
                <span className="inline text-[#017FE0]">01</span>
                <p>02</p>
                <p>03</p> <p>→</p>
            </h3>
        </div>
    );
};

export default Carousel;
