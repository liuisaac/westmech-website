import Image from "next/image";
import React from "react";

const SummerCamp = () => {
    return (
        <div className="w-[30vw] h-[80vh] overflow-hidden relative">
            <figure className="w-full h-2/3 relative border-4 border-[#00000069]">
                <Image
                    src="/programs/carousel/empty.png"
                    alt="Navigation pin"
                    className=""
                    style={{ objectFit: "cover" }}
                    fill
                />
            </figure>
            <header className="text-5xl font-medium tracking-tighter mt-4">
                Summer Camp
            </header>
            <p className="text-3xl tracking-tighter text-black text-opacity-50 mt-4">
                Our premiere program. Join a team of 3-4 students and build your
                very first robot. Registration for 2024 Open now.
            </p>
            <button className="border-2 border-black border-opacity-50 rounded-full px-6 text-3xl opacity-50 absolute bottom-0">
                Register now
            </button>
        </div>
    );
};

export default SummerCamp;
