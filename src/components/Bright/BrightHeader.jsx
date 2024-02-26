import React from "react";
import { Form } from "react-router-dom";

function BrightHeader() {
  return (
    <div className="flex justify-between py-2 ">
      {/* logo */}
      <div className="mx-5 flex">
      <img width="30" height="30" className='me-2' src="https://img.icons8.com/wired/64/house-of-cards.png" alt="house-of-cards"/>
        <p className="font-bold text-xl">Bright.</p>
      </div>

      {/* search bar */}
      {/* <input
        className="rounded-md w-72 bg-zinc-300 px-2"
        type="text"
        name="search"
        id=""
        role="search"
        placeholder="Search product, items"
      /> */}
      <Form>
      <input
              aria-label="Search contacts"
              placeholder="Search product, items"
              type="search"
              name="search"
              className="rounded-md w-72 h-full bg-zinc-300 px-2 py-1"
            />
      </Form>

      {/* menu icons */}
      <div className="flex mx-5">
        <img
          className="mx-2"
          width="30"
          height="30"
          src="https://img.icons8.com/pulsar-color/48/alarm.png"
          alt="alarm"
        />
        <img
          className="mx-2"
          width="30"
          height="30"
          src="https://img.icons8.com/ios-filled/50/user-female-circle.png"
          alt="user-female-circle"
        />
      </div>
    </div>
  );
}

export default BrightHeader;
