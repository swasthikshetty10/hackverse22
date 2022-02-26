import Image from 'next/image'
import React from 'react'
import place from '../../../public/place.jpeg'

function Information() {
    return (
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
    )
}

export default Information