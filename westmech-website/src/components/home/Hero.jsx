import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-screen bg-red mt-[100px] justify-center items-center flex flex-col">
      <div className=" w-[80vw] text-9xl font-medium tracking-tighter">
        <p>Building The Next</p>
        <p>
          Generation's{" "}
          <span className="bg-clip-text bg-gradient-to-r from-[#0F86E1] to-[#7DBCEC] text-transparent pr-4">
            Engineers
          </span>
        </p>
      </div>
      <div className="relative w-[80vw] h-[70vh] rounded-xl overflow-hidden mt-5">
        <Image
          src="/home/hero.png"
          alt="background picture of a robot"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
    // <section className="w-screen flex-col-centered pt-16">
    //     <header className="relative w-[80vw] h-[20vw] flex-col-left text-9xl font-medium tracking-tighter">
    //         <p>Building The Next</p>
    //         <p>Generation's <span className="bg-clip-text bg-gradient-to-r from-[#0F86E1] to-[#7DBCEC] text-transparent pr-4">Engineers</span></p>
    //     </header>
    //     <figure className="relative w-[80vw] h-[90vh] rounded-xl overflow-hidden">
    //
    //     </figure>
    // </section>
  );
};

export default Hero;
