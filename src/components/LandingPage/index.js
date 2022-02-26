import Image from 'next/image'
import hero from '../../../public/airplane.png'
import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";

function LandingPage() {
    return (
        <section className="text-gray-600 body-font h-screen md:mt-24">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Zoom>
                    <div className="text-center">
                        <Image
                            src={hero}
                            className="object-cover object-center rounded"
                            alt="Picture of the author"
                            width="350px"
                            height="350px"
                        />
                    </div>
                    </Zoom>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <Fade cascade>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your best Budget planner
                        <br className="hidden lg:inline-block" /> at your fingertips.
                    </h1>
                    <p className="mb-8 leading-relaxed">Love Travelling but unsure about the expenditure? We've got you covered! The perfect Budget planner to estimate your expenditure in Travelling and living in your favourite destination in few simple clicks.</p>
                    <div className="flex justify-center">
                        <a href="/dashboard"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make your Budget!</button></a>
                    </div>
                    </Fade>
                </div>
            </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
        </section>
    )
}

export default LandingPage