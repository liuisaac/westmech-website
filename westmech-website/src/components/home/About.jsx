import React from "react";

const About = () => {
    return (
        <section className="w-screen h-[50vh] flex-row-centered">
            <div className="w-[80vw] flex-row-centered border-b-[1px] pb-16 border-black">
                <aside className="w-1/3 flex-row-start text-9xl font-medium tracking-tighter">
                    About Us
                </aside>
                <header className="w-2/3 flex-col-centered text-2xl">
                    <p className="mt-6">
                        <span className="inline text-[#017FE0]">Westmech</span> is a robotics club located in Calgary. We
                        aim to make robotics accessible to students K-12 through
                        our camps, events, and club programs.
                    </p>
                    <div className="w-full flex-row-start gap-5 text-[#161616] mt-4">
                        <button className="px-4 h-10 bg-[#939393] rounded-full text-[#939393] border-2 border-[#939393] bg-opacity-0 hover:bg-opacity-100 duration-100 ease-in-out transition-colors">
                            <span className="hover:text-white duration-500 ease-in-out transition-colors">Sign up for a class</span>
                        </button>
                        <button className="px-4 h-10 bg-[#939393] rounded-full text-[#939393] border-2 border-[#939393] bg-opacity-0 hover:bg-opacity-100 duration-100 ease-in-out transition-colors">
                            <span className="hover:text-white duration-500 ease-in-out transition-colors">See upcoming events →</span>
                        </button>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default About;
