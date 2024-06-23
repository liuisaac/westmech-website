import React from "react";
import { blog } from "./blog.json";
import Image from "next/image";

const Blog = () => {
    return (
        <div className="w-[80vw] flex-col-left">
            {blog.map((item, key) => (
                <article
                    key={key}
                    className="py-16 border-b-2 w-full border-black border-opacity-40 flex flex-row"
                >
                    <figure className="w-[30vw] h-[50vh] relative overflow-hidden">
                        <Image
                            src={item.thumbnail}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "cover" }}
                            fill
                        />
                    </figure>
                    <div className="text-black ml-10 w-[50vw] pr-[10vw] h-full">
                        <h2 className="text-4xl-responsive font-normal mb-10">
                            {item.date}
                        </h2>
                        <header className="text-6xl-responsive font-medium tracking-tighter">
                            {item.name}
                        </header>
                        <p className="text-3xl-responsive opacity-50">
                            {item.description}
                        </p>
                        <button className="hover:text-[#017FE0] transition duration-500 ease-in-out mt-16 text-3xl-responsive tracking-tighter">
                            Read more →
                        </button>
                    </div>
                </article>
            ))}
            <button className="hover:text-[#017FE0] transition duration-500 ease-in-out mt-6 mb-16 text-3xl-responsive underline tracking-tighter">
                ALL BLOGS
            </button>
        </div>
    );
};

export default Blog;
