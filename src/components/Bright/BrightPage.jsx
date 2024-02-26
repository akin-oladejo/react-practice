import React from "react";
import BrightHeader from "./BrightHeader";
import CategoryDiv from "./CategoryDiv";
import FeatureDiv from "./FeatureDiv";

function BrightPage() {
  const imgs = [
    'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVufGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
     'https://images.unsplash.com/photo-1708921047448-389333bac8f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8', 
     'https://images.unsplash.com/photo-1708526232513-111d31cf6181?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    ]


  return (
    <>
    {/* header */}
      <BrightHeader />

      {/* main sgrid layout*/}
      <div className="grid grid-cols-3  grid-rows-2 gap-3 h-screen py-5 px-10">
        {/* topmost div */}
        <FeatureDiv imgUrl={imgs[0]}/>

        {/* three bottom divs */}
        <CategoryDiv 
        imgUrl={imgs[1]}
         mainText={'Papaya'}
         col={1}
         startPrice={300}/>

        <CategoryDiv 
        imgUrl={imgs[2]} 
        mainText={'Zen'} 
        col={2}
        startPrice={320000}/>

        <CategoryDiv 
        imgUrl={imgs[3]} 
        mainText={'Smickery'} 
        col={3}
        startPrice={1200}/>
      </div>
    </>
  );
}

export default BrightPage;
