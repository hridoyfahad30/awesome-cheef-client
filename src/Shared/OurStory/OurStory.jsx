import React from "react";

const OurStory = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="flex gap-6">
        <div className="group overflow-hidden w-96 rounded-3xl">
          <img
            className="w-96 rounded-3xl group-hover:scale-110 duration-500"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo3/wp-content/uploads/sites/3/2020/12/kitchen-light.jpg"
            alt=""
          />
        </div>
        <div className="group overflow-hidden w-96 rounded-3xl">
          <img
            className="w-96 rounded-3xl group-hover:scale-110 duration-500"
            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/demo3/wp-content/uploads/sites/3/2020/12/stil-336188-unsplash-768x960.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="w-1/4 text-center space-y-6 bg-orange-100 rounded-xl p-8 absolute right-28 top-10 z-10">
          <h3 className="text-3xl font-semibold">Discover</h3>
          <h1 className="text-6xl font-semibold">Our Story</h1>
          <p className="text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
