import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-screen flex-col-centered pt-16">
            <header className="relative w-[80vw] h-[20vw] flex-col-left text-9xl font-medium tracking-tighter">
                <p>Building The Next</p>
                <p>Generation's <span className="text-[#017FE0]">Engineers</span></p>
                
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
