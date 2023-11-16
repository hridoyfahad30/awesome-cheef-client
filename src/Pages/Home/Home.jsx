import React from "react";
import { Link } from "react-router-dom";
import AllChefSlider from "../../Shared/ChefCard/AllChefSlider";
import PopularRecipe from "../../Shared/PopularRecipe/PopularRecipe";
import GetUpdateRecipe from "../../Shared/GetUpdateRecipe/GetUpdateRecipe";
import { Typewriter } from "react-simple-typewriter";
import Highlight from "../../Shared/Highlight/Highlight";
import SeasonalMenue from "../../Shared/SeasonalMenue/SeasonalMenue";
import VisitRestaurant from "../../Shared/VisitRestaurant/VisitRestaurant";
import OurStory from "../../Shared/OurStory/OurStory";
import Offer from "../../Shared/Offer/Offer";

const Home = () => {
  return (
    <>
      <div className="mx-auto my-10">
        <div className="container mx-auto bg-[url('https://i.ibb.co/K0jHj0t/bg.jpg')] bg-cover bg-no-repeat rounded-2xl my-16 shadow-2xl shadow-slate-900">
          <div className="text-white text-center py-10">
            <h1 className="text-3xl md:text-7xl my-4 md:my-10">
              <span style={{ color: "white", fontWeight: "bold" }}>
                <Typewriter
                  words={["Fried", "Baked", "Boiled"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl md:leading-normal">
              no matter how you cook <br /> Awesome Recipe has many the recipes
            </h2>
            <div className="md:w-6/12 mx-4 md:mx-auto my-6">
              <p className="md:text-base text-center mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                explicabo ratione iure repellat voluptatum illum,{" "}
              </p>

              <Link
                to="/all-recipes"
                className="px-8 py-2 rounded-lg bg-orange-600 text-white font-medium text-lg hover:bg-orange-500 duration-300"
              >
                Explore Recipes{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="my-14">
          <Offer />
        </div>

        <div className="container mx-auto my-12">
          <Highlight />
        </div>

        <div className="container mx-auto border border-orange-500  drop-shadow-2xl rounded-2xl p-8">
          <h1 className="text-3xl md:text-5xl mt-4 ml-2 md:mt-8 md:ml-8 text-orange-600 font-semibold underline">
            Our Chef&apos;s
          </h1>

          <AllChefSlider></AllChefSlider>
        </div>

        <div className="container mx-auto my-12">
          <SeasonalMenue />
        </div>

        <div className="container mx-auto my-14">
          <h1 className="text-3xl md:text-5xl mt-4 ml-6 mb-4 md:mt-8 md:ml-8 text-orange-600 font-semibold underline">
            Our Popular Recipe
          </h1>
          <PopularRecipe></PopularRecipe>
        </div>
      </div>

      <div className="my-20 bg-[url('https://i.ibb.co/02dCjJX/Grou1.jpg')] rounded-lg bg-cover">
        <div className="container mx-auto text-white md:w-6/12">
          <GetUpdateRecipe></GetUpdateRecipe>
        </div>
      </div>

      <div className="my-14">
        <VisitRestaurant />
      </div>
      <div className="my-20">
        <OurStory />
      </div>
    </>
  );
};

export default Home;
