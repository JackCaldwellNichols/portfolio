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
            <h2>InstaReact</h2>
            <br />
            <p>
              InstaReact is an alternative version of Instagram - with full
              functionalities, including signing up and in, and the option to
              create an account directly with Google. A user can then start
              following their friends, sharing photos, updating their profiles
              and commenting on the posts of others.
            </p>
            <br />
            <p>
              Built using ReactJS, Chakra-UI, Firebase, Zustand, JavaScript,
              RestAPI&apos;s,
            </p>
          </div>
          <div className="right">
            <Image src={phone} alt="" />
            <div className="screen">
              <video className="phoneVideo" controls>
                <source
                  src="https://res.cloudinary.com/dzcz4e9nd/video/upload/v1702236964/2023__20_23_54__Copy_1_wwxjoc.mp4"
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
