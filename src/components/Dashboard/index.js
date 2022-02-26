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

      <h1 className="mb-14 text-center title-font sm:text-4xl text-3xl font-medium text-gray-900">Nearby Tourist Attractions</h1>
      <main class="py-4">
      <div class="px-4">
         <div class="block md:flex justify-between md:-mx-2">
            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
               <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80" />
               <div class="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                  Tourist Place Name
                  </a>
                  <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Tourism Place location
                  </div>
                  <a href="/info">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4">Estimate Budget</button>
                  </a>
               </div>
            </div>
            </div>
            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
               <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
               <div class="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                  Tourist Place Name
                  </a>
                  <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Tourism Place location
                  </div>
                  <a href="/info">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 ">Estimate Budget</button>
                  </a>
               </div>
            </div>
            </div>
            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
               <img class="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
               <div class="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                  Tourist Place Name
                  </a>
                  <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Tourism Place location
                  </div>
                  <a href="/info">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 ">Estimate Budget</button>
                  </a>
               </div>
            </div>
            </div>
         </div>
      </div>
      </main>

      <nav className="text-center mt-5 mb-5">
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
   </>
}

export default DashboardIndex