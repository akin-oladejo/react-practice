import React from "react";
import RetroArtHeader from "./RetroArtHeader";
import ArtCard from "./ArtCard";

function RetroArtPage() {
  return (
    <div className="w-screen h-full px-20 relative overflow-x-hidden">
      <RetroArtHeader />
      <div className="flex  justify-between items-stretch w-full">

        {/* main featured text */}
        <div className="flex flex-col justify-between gap-4">
          <h1 className="text-6xl font-semibold">
            Collect RetroArt <br /> Digital Artwork
          </h1>
          <p>Buy and sell art from the world's top museums</p>
          <div className="flex gap-2 items-center w-fit text-sm py-2 px-6 bg-black text-white cursor-pointer">
            Get Started
            <svg className='fill-white w-2 h-2 inline rotate-90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up"/></svg>
          </div>
          <hr className=" border-black"/>
          <div className="flex gap-3">
            <div className="flex flex-col">
                <div className="font-bold">30K+</div>
                <div className="font-light text-zinc-600">Artworks</div>
            </div>

            <div className="flex flex-col">
                <div className="font-bold">130K+</div>
                <div className="font-light text-zinc-600">Auctions</div>
            </div>

            <div className="flex flex-col">
                <div className="font-bold">12K+</div>
                <div className="font-light text-zinc-600">Artists</div>
            </div>
          </div>
        </div>

        <ArtCard />
      </div>

      {/* latest artwork row */}
      <div className="flex justify-between items-center mt-10 mb-5">
        {/* latest artwork heading */}
        <h1 className="text-2xl">Latest Artwork</h1>

        {/* arrows */}
        <div className="flex gap-4">
        <svg className="fill-black hover:fill-emerald-700 cursor-pointer" height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
        <svg className="fill-black hover:fill-emerald-700 cursor-pointer" height={20} width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
        </div>

        {/* view all button */}
        <div className="cursor-pointer flex items-center hover:fill-emerald-600 hover:underline">
            <div className="uppercase text-sm font-semibold">View All</div>
            <svg className="rotate-90 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z" data-name="7-Arrow Up"/></svg>
        </div>
      </div>

      <div className="flex gap-5 w-screen h-fit mb-10">
        <ArtCard/>
        <ArtCard/>
        <ArtCard/>
        <ArtCard/>
      </div>

    {/* <div className="h-20 bg-black"></div> */}
    </div>
  );
}

export default RetroArtPage;
