import React from "react";

function ArtCard({
  imgUrl = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww",
  title = "terraforma",
  amount = 30000,
  converted = 400,
}) {
  return (
    <div
      style={{ backgroundImage: `url('${imgUrl}')`, backgroundSize: "contain" }}
      className="relative w-72 h-96"
    >
      <div className="absolute bottom-0 w-full bg-emerald-700 p-6 text-white">
        <div className="uppercase text-xl font-bold">{title}</div>
        <div className="text-zinc-300 text-xs">Reserve Price</div>
        <div className="flex gap-1 items-center">
          <div className="text-lg font-bold">₦{amount.toLocaleString()}</div>
          <div className="text-sm font-thin">(${converted})</div>
        </div>
        <div className="flex text-sm gap-3 mt-2">
          <button className="bg-black py-3 px-4 hover:text-emerald-300">Place a Bid</button>
          <button className="border-[1px] px-2 py-3 hover:text-emerald-300">View Artwork</button>
        </div>
      </div>
    </div>
  );
}

export default ArtCard;
