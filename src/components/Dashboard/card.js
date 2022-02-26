import React from 'react'
function Card({ name, loc, img }) {
    return (
        <>
            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white rounded-lg overflow-hidden shadow relative">
               <img class="h-56 w-full object-cover object-center" src={img} />
               <div class="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                  {name}
                  </a>
                  <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  {loc}
                  </div>
                  <a href="/info">
                  <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4">Estimate Budget</button>
                  </a>
               </div>
            </div>
            </div>
        </>
    )
}

export default Card