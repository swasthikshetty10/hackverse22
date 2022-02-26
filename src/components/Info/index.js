import Image from 'next/image'
import React from 'react'
import place from '../../../public/place.jpeg'

function Information() {
    return <>
        <section className="text-gray-600 body-font">
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

         <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>
      </section>

      <h3 className="text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Hotels Nearby</h3>
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
    
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Hotel Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Price
                            </p>
                        </a>
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Hotel Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Price
                            </p>
                        </a>
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Hotel Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                        <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Price
                            </p>
                        </a>
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>
    
        </div>
        </div>

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
        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">4</a>
        </li>
        <li>
        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">5</a>
        </li>
        <li>
        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white rounded-r-lg border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">Next</a>
        </li>
        </ul>
        </nav>

        <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>


        <h3 className="text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Airports Nearby</h3>
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
    
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Airport Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Airport Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Airport Name
                            </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                        <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                            <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                            <p className="ml-2 text-sm">
                                Ratings
                            </p>
                        </a>
                    </footer>

                </article>


            </div>
    
        </div>
        </div>

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
        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">4</a>
        </li>
        <li>
        <a href="#" className="py-2 px-3 leading-tight text-white-500 bg-white border bordet-white-300 hover:bt-gray-800 hover:text-gray-500">5</a>
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