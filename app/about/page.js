import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className=" px-3 py-3 md:px-9 lg:px-12 md:py-6">
      <div className="relative w-full h-[50vh] ">
        <Image
          src={"/about.jpg"}
          fill
          priority
          alt="about-img"
          className="object-cover rounded"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-[50px] md:gap-[100px] py-2">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Who Are We?</h1>
          <p className="tracking-wider py-4 text-base px-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiisvoluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold">Who Are We?</h1>
          <p className="tracking-wider py-4 text-base px-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiisvoluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p>- Dynamic Websites</p>
          <br/>
          <p>- Dynamic Websites</p>
          <br/>
          <p>- Dynamic Websites</p>
          <br/>
          <button type="button" 
          className="px-1 md:px-2 py-2 md:text-base text-black bg-white rounded shadow-lg shadow-black-500/50"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
