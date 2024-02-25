import React from "react";
import AnimatedCursor from "react-animated-cursor";


export default function Page() {
  return (
    <div className="min-h-screen bg-black">
           <div className="h-screen flex flex-col justify-center place-items-center">
               <h1 className="text-center relative z-10 text-[4em] text-white">
                   <span>
                       <button className="transition-all hover:scale-105 hover:text-theme-blue hover:translate-y-2 duration-500 ease-in-out transform">rohan</button>
                   </span>{" "}
                   <AnimatedCursor
        innerSize={0}
        outerSize={8}
        outerAlpha={0.2}
        outerScale={4}
        trailingSpeed={5}
        color='256, 256, 256'
        />
               </h1>
                
            </div>
        </div>
  );
}