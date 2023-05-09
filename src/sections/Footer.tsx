import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import moon from '../../public/moon.png'

function Footer() {



  return (
    <footer>
      
        <Image src={moon} alt='' width={300} height={300} style={{objectFit:'cover'}} className='footerImg'/>
        <h2>In Code We Trust.</h2>
     
    </footer>
  );
}

export default Footer;
