import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

export const Slider_baner = ({ movielist }) => {
    // indexes get karne ke liye .....
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        // using setInterval to show banner slider....
        const id = setInterval(() => {
            setIdx((prev) => (prev + 1) % 5)
        }, 4000);
        // this will stop when page change,data change or re-render .....
        return () => clearInterval(id)

    }, [])

    const slide_banner_length = movielist.slice(0, 5).length;

    return (
        <>
        {/* left slider button */}
            <button onClick={() => {
                setIdx((prev) => prev === 0 ? slide_banner_length - 1 : prev - 1)
            }} className="p-1 text-base active:scale-95 top-[35%] left-[0%] absolute cursor-pointer
            md:top-[45%] md:text-3xl lg:text-4xl"><FaAngleLeft /></button>

            <div className="flex h-auto w-full"
                style={{
                    transform: `translateX(-${idx * 100}%)`,
                    transition: `transform 0.5s ease`
                }}
            >
                {movielist.slice(0, 5).map((banner_list) => {
                    return (

                        <div key={banner_list.id} className="relative h-[53vh] min-w-full top-16
                        md:h-[73vh] ">
                            <img src={`https://image.tmdb.org/t/p/w1280${banner_list.backdrop_path}`} alt="movie banner"
                                className="w-full h-[84vh] object-cover 
                                md:h-[73vh]" />

                            {/* Play Button */}
                            <button
                                className="absolute top-[44%]  left-1/2 -translate-x-1/2 -translate-y-1/2
                                 bg-white/80 p-5 rounded-full text-black text-2xl
                                 hover:bg-white active:scale-95 cursor-pointer"
                            >
                                <FaPlay />
                            </button>
                            <h1 className="absolute bottom-15 left-5 text-2xl text-white font-bold">{banner_list.title}</h1>
                        </div>
                    );
                })}
                
            </div>
              {/* right slider button */}
            <button onClick={
                () => {
                    setIdx((prev) => (prev + 1) % slide_banner_length)
                }
            } className="p-1 text-base active:scale-95 top-[35%] right-[0%] absolute cursor-pointer
            md:top-[45%]  md:text-3xl lg:text-4xl"><FaChevronRight /></button>

        </>
    )
}
export default Slider_baner;



