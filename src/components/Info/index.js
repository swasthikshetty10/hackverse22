import Image from 'next/image'
import React from 'react'
import place from '../../../public/place.jpeg'
import Card from './card';
import { Fade } from "react-awesome-reveal";

function Information({ data }) {
        console.log(data)
        return <>

                {/* Location Info */}
                <section className="text-gray-600 body-font">
                        <Fade>
                                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                                <Image
                                                        src={place}
                                                        className="object-cover object-center rounded"
                                                        alt="Picture of the author"
                                                        width="500px"
                                                        height="350px"
                                                />
                                        </div>
                                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Place Name
                                                </h1>
                                                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                                                <div className="flex justify-center">
                                                </div>
                                        </div>
                                </div>
                        </Fade>

                        <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>
                </section>

                {/* Hotels Nearby Cards */}
                <h3 className="text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Hotels Nearby</h3>
                <Fade>
                        <div className="container my-12 mx-auto px-4 md:px-12">
                                <div className="flex flex-wrap -mx-1 lg:-mx-4">

                                        <Card
                                                name="Hotel Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 1, rate: "20000" }]}
                                        />

                                        <Card
                                                name="Hotel Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 1, rate: "20000" }]}
                                        />

                                        <Card
                                                name="Hotel Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 1, rate: "20000" }]}
                                        />

                                </div>
                        </div>
                </Fade>
                {/* Pagination */}
                <nav className="text-center mb-5">
                        <ul className="inline-flex -space-x-px mb-5">
                                <li>
                                        <a href="#" className="py-2 px-3 ml-0 leading-tight text-white-500 bg-white rounded-l-lg border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">Previous</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">1</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">2</a>
                                </li>
                                <li>
                                        <a href="#" aria-current="page" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">3</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white rounded-r-lg border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">Next</a>
                                </li>
                        </ul>
                </nav>

                <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>

                {/* Airports Nearby Cards */}
                <h3 className="text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Airports Nearby</h3>
                <Fade>
                        <div className="container my-12 mx-auto px-4 md:px-12">
                                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                        <Card
                                                name="Aiport Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 0, rate: "" }]}
                                        />

                                        <Card
                                                name="Aiport Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 0, rate: "" }]}
                                        />

                                        <Card
                                                name="Aiport Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 0, rate: "" }]}
                                        />

                                </div>
                        </div>
                </Fade>

                {/* Pagination */}
                <nav className="text-center mb-5">
                        <ul className="inline-flex -space-x-px mb-5">
                                <li>
                                        <a href="#" className="py-2 px-3 ml-0 leading-tight text-white-500 bg-white rounded-l-lg border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">Previous</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">1</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">2</a>
                                </li>
                                <li>
                                        <a href="#" aria-current="page" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">3</a>
                                </li>
                                <li>
                                        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white rounded-r-lg border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">Next</a>
                                </li>
                        </ul>
                </nav>

                <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>
        </>
}

export default Information