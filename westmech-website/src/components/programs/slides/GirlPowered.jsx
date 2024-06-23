import Image from "next/image";
import React from "react";

const GirlPowered = () => {
    return (
        <div className="w-[30vw] h-[80vh] overflow-hidden relative">
            <figure className="w-full h-2/3 relative border-4 border-[#00000069]">
                <Image
                    src="/programs/carousel/girl powered.png"
                    alt="Navigation pin"
                    className=""
                    style={{ objectFit: "cover" }}
                    fill
                />
            </figure>
            <header className="text-5xl-responsive font-medium tracking-tighter mt-4">Girl Powered Workshop</header>
            <p className="text-3xl-responsive tracking-tighter text-black text-opacity-50 mt-4">
                A 2-day robotics summer camp to dip your toes into robotics for
                the first time. Happening July 27-28.
            </p>
            <button className="border-2 border-black border-opacity-50 rounded-full px-6 text-3xl-responsive opacity-50 absolute bottom-0">Sign up</button>
        </div>
    );
};

export default GirlPowered;
