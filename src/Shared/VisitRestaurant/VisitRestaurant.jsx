import React from "react";

const VisitRestaurant = () => {
  return (
    <div className="flex justify-evenly items-start">
      <div>
        <div className="bg-orange-400 bg-opacity-20 p-8 w-[500px] h-96 rounded-xl space-y-6 xl:absolute">
          <h1 className="text-5xl font-semibold">Visit Our Restaurant</h1>
          <p className="text-lg">
            <strong>Lunch</strong>
            <br />
            Saturday and Sunday <br /> Reservations from 12pm to 1.30pm
          </p>
          <p className="text-lg">
            <strong>Dinner</strong>
            <br />
            Thursday to Sunday <br /> Reservations from 6pm to 8.45pm
          </p>
        </div>
      </div>
      <div className="mr-16 mt-14 z-10">
        <img
          className="w-96 md:w-[500px] lg:w-[800px]"
          src="https://grandrestaurantv6-7.b-cdn.net/wp-content/uploads/2022/09/business-lunch-man-and-woman-sitting-at-table-at-2021-12-09-04-16-54-utc-1024x683.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default VisitRestaurant;
