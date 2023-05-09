import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import phone from '../../public/phone.png'




const Videos = () => {

      return (
        <div className="projects" id="work">
            <div className="title">
                <h2>A few more examples...</h2>
            </div>
            <div className="wrapper">
                    <div className="imgContainer">
                        <div className='left'>
                            <Image src={phone} alt=''/>
                            <div className="screen">
                            <video className='phoneVideo' controls>
                                <source src='https://res.cloudinary.com/dzcz4e9nd/video/upload/v1683057156/placetostay_oayv8r.mp4' type='video/mp4'/>
                            </video>
                            </div>
                        </div>
                        <div className="desc">
                            <h2>
                                Place Away
                            </h2>
                            <br />
                            <p>Place Away is a full stack, fully responsive web application which allows a user to search for accomodation to rent out, around the world. A user can search by location, filter by price, as well as add accomdation and photos for others to find.</p>
                            <br />
                            <p>Built using MongoDB, React, Node.js, Express.js, as well as incorporating Firebase Storage, Swiper, Map Box, and more.</p>
                        </div>
                    </div>
                    <div className="imgContainerBottom">
                    <div className="descBottom">
                        <h2>
                            Films4Geeks
                        </h2>
                            <br />
                            <p>Films4Geeks is a fully responsive, full stack movie application which allows a user to register, and create their own profile, as well as explore the latest releases, upcoming releases, search for movies, watch trailers, add their favourites, leave comments, see their preferences, and more...</p>
                            <br />
                            <p>Built using React, Javascript, Python, Flask, RestAPI&apos;s, Bootstrap, Font Awesome</p>
                        </div>
                        <div className='right'>
                            <Image src={phone} alt=''/>
                            <div className="screen">
                            <video className='phoneVideo' controls>
                                <source src='https://res.cloudinary.com/dzcz4e9nd/video/upload/v1683196286/Studio_Project_3_cg6zwf.mp4' type='video/mp4'/>
                            </video>
                            </div>
                        </div>
                        
                    </div>
                   
            </div>
        </div>
      );
    }
export default Videos
