import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "../../public/phone.png";

const Videos = () => {
  return (
    <div className="projects" id="work">
      <div className="title">
        <h2>Some of my mobile apps...</h2>
      </div>
      <div className="wrapper">
        <div className="imgContainer">
          <div className="left">
            <Image src={phone} alt="" />
            <div className="screen">
              <video className="phoneVideo" controls>
                <source
                  src="https://res.cloudinary.com/dzcz4e9nd/video/upload/v1693899461/MEALSTOGO_clu5zb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="desc">
            <h2>MealsToGo</h2>
            <br />
            <p>
              MealsToGo is a mobile app, which allows a user to search for
              nearby restaurants, browse their menu, add them to a favourites
              list, as well as use the camera to take and upload a profile
              picture.
            </p>
            <br />
            <p>
              Built using React Native for Android and iOS, Firebase, Styled
              Components, and more.
            </p>
          </div>
        </div>

        <div className="imgContainerBottom">
          <div className="descBottom">
            <h2>Recipifier</h2>
            <br />
            <p>
              Recipifier is a fully responsive, web application which allows a
              user to register sign in to their account, and browse a vast
              amount of recipes, ingredients, and suggestions.
            </p>
            <br />
            <p>
              Built using NextJS, Typescript, Tailwind, AuthJS, The MealDB,
              RestAPI&apos;s,
            </p>
          </div>
          <div className="right">
            <Image src={phone} alt="" />
            <div className="screen">
              <video className="phoneVideo" controls>
                <source
                  src="https://res.cloudinary.com/dzcz4e9nd/video/upload/v1695011361/recipifiervid_wnfryf.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videos;
