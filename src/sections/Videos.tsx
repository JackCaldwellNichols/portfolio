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
            <h2>Films4Geeks</h2>
            <br />
            <p>
              Films4Geeks is a fully responsive, full stack movie application
              which allows a user to register, and create their own profile, as
              well as explore the latest releases, upcoming releases, search for
              movies, watch trailers, add their favourites, leave comments, see
              their preferences, and more...
            </p>
            <br />
            <p>
              Built using React, Javascript, Python, Flask, RestAPI&apos;s,
              Bootstrap, Font Awesome
            </p>
          </div>
          <div className="right">
            <Image src={phone} alt="" />
            <div className="screen">
              <video className="phoneVideo" controls>
                <source
                  src="https://res.cloudinary.com/dzcz4e9nd/video/upload/v1683196286/Studio_Project_3_cg6zwf.mp4"
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
