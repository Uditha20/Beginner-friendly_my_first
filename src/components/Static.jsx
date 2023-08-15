import React from "react";
import Laptop from "../assets/laptop.jpg";

function Static() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center " >
        <p className="text-[#00df9a] font-bold">Data analytics Dashboard</p>
        <h1 className="md:text-4xl sm:text-2xl text-2xl font-bold py-2">Manage Data analytics centrally</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          numquam ad possimus, amet nemo dolore molestias ipsa. Soluta ipsa
          quidem suscipit consectetur perferendis fugit numquam laborum. Tempore
          libero vero voluptatibus.
        </p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get start</button>
      </div>
     
      </div>
    </div>
  );
}

export default Static;
