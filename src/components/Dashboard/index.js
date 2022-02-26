import React from 'react'
import Image from 'next/image'
import place from '../../../public/place.jpeg'

function DashboardIndex() {
   return <>
      <header id="up" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative" style={{ background: "url('https://images.pexels.com/photos/1730403/pexels-photo-1730403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }}>
         <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="mx-2 text-center">
               <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                  <span className="text-white">Search</span> any Place
               </h1>
               <div className="mt-5 flex items-center justify-center">
                  <div className="flex border-2 rounded">
                     <input type="text" className="px-4 py-2 w-96" placeholder="Try 'Udupi'" />
                     <button className="flex items-center justify-center px-4 border-l">
                        <svg className="w-6 h-6 text-white-600" fill="white" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                           <path
                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </header>

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

         <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
      </section>

      <div className="min-h-screen p-3 relative">
         <h1 className="text-center title-font sm:text-4xl text-3xl font-medium text-gray-900">Nearby Tourist Attractions</h1>
         <div className="w-96 mx-auto">

            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Place Name.
                     </h1>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Location.
                     </p>
                     <a href="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Budget</button></a>
                  </div>
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>

            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                        Place Name.
                     </h1>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Location.
                     </p>
                     <a href="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Budget</button></a>
                  </div>
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>

            <div className="">
               <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" />
               <div
                  className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                  <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                  <div className="py-4 px-8">
                     <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                        Place Name.
                     </h1>
                     <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Location.
                     </p>
                     <a href="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Budget</button></a>
                  </div>
                  <div className="absolute top-1/2 w-full flex justify-between z-20">
                     <label for="carousel-2" className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg>
                     </label>
                     <label for="carousel-1" className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                        </svg>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default DashboardIndex