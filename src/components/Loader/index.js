import React from 'react'
import Image from 'next/image'
import hero from '../../../public/airplane.png'
import {  Roll, Slide, Fade } from "react-awesome-reveal";

function Loader() {
    return (
        <div className="flex h-screen justify-center items-center">
        <Fade cascade delay="40"><Slide direction="right">
        <h3 className="mr-36 text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">
        MakeMeAfford
        </h3>
        <a className="mr-36 text-sm hover:text-gray-900">Best travel buddy!</a>
        </Slide></Fade>
        < Roll>
        <Image
        src={hero}
        className="object-cover object-center rounded"
        alt="Picture of the author"
        width="250px"
        height="250px"
        />
        </ Roll>
        </div>
    )
}

export default Loader