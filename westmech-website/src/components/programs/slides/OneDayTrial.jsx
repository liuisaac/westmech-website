import Image from "next/image";
import React from "react";

const OneDayTrial = () => {
    return (
        <div className="w-[30vw] h-[80vh] overflow-hidden relative">
            <figure className="w-full h-2/3 relative border-4 border-[#00000069]">
                <Image
                    src="/programs/carousel/1 day trial.png"
                    alt="Navigation pin"
                    className=""
                    style={{ objectFit: "cover" }}
                    fill
                />
            </figure>
            <header className="text-5xl font-medium tracking-tighter mt-4">
                1-Day Trial
            </header>
            <p className="text-3xl tracking-tighter text-black text-opacity-50 mt-4">
                Build a robot at our facility and see for yourself if robotics
                is for you! Book a meeting today!
            </p>
            <button className="border-2 border-black border-opacity-50 rounded-full px-6 text-3xl opacity-50 absolute bottom-0">
                Book meeting
            </button>
        </div>
    );
};

export default OneDayTrial;
