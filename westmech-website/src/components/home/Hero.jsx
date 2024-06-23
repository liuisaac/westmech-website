import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-screen flex-col-centered pt-16">
            <header className="relative w-[80vw] h-[20vw] flex-col-left font-medium tracking-tighter text-9xl-responsive ">
                <p>Building The Next</p>
                <p>Generation's <span className="bg-clip-text bg-gradient-to-r from-[#0F86E1] to-[#7DBCEC] text-transparent pr-4">Engineers</span></p>
                
            </header>
            <figure className="relative w-[80vw] h-[90vh] rounded-xl overflow-hidden">
                <Image
                    src="/home/hero.png"
                    alt="background picture of a robot"
                    style={{objectFit: "cover"}}
                    fill
                    priority
                />
            </figure>
        </section>
    );
};

export default Hero;
