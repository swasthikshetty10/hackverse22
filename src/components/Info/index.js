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
                                                <img
                                                        src={data.imageUrls ? data.imageUrls[0] : place}
                                                        className="object-cover object-center rounded"
                                                        alt="Picture of the author"
                                                        width="500px"
                                                        height="350px"
                                                />
                                        </div>
                                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.title}</h1>
                                                <p className="mb-8 leading-relaxed">
                                                        {data.address}
                                                </p>
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

    {/* Airports Nearby Cards */}
        <h3 className="text-center text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Airports Nearby</h3>
        <Fade>
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Card 
                name="Airport Name"
                maps="/"
                img="https://picsum.photos/600/400/?random"
                ratings="5"
                price={[{ exist: 0, rate: "" }]}
        />

        <Card 
                name="Airport Name"
                maps="/"
                img="https://picsum.photos/600/400/?random"
                ratings="5"
                price={[{ exist: 0, rate: "" }]}
        />

        <Card 
                name="Airport Name"
                maps="/"
                img="https://picsum.photos/600/400/?random"
                ratings="5"
                price={[{ exist: 0, rate: "" }]}
        />
    
        </div>
        </div>
        </Fade>

                                        <Card
                                                name="Aiport Name"
                                                maps="/"
                                                img="https://picsum.photos/600/400/?random"
                                                ratings="5"
                                                price={[{ exist: 0, rate: "" }]}
                                        />

        {/* Estimated Budget */}
        <div className="p-2 w-full pt-8 mt-8 border-t bordet-gray-200 text-center"></div>
        <div className='flex items-center justify-center'>
        <img alt="Placeholder" className="mb-2 text-center block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
        <h4 className="ml-2 text-center text-2xl font-normal leading-normal mt-0 mb-2 text-gray-800">Estimated Budget</h4>
        </div>
        {/* Cost Table */}
        <div class="flex flex-col mb-14">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
                <table class="min-w-full">
                <thead class="bg-gray-200 border-b">
                <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Selected Type
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Expense (₹)
                </th>
                </tr>
                </thead>

                <tbody>
                <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Hotel
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Ramesh Restaurant
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ₹20000
                </td>
                </tr>

                <tr class="bg-gray-100 border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Airport
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Srinagar Airport
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ₹20009
                </td>
                </tr>

                <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Travel 
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Flight
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ₹23000
                </td>
                </tr>

                <tr class="bg-gray-300 border-b">
                <td class=""></td>
                <td class=""></td>
                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Final Amount Expense
                </td>
                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                ₹63009
                </td>
                </tr>
                </tbody>
                </table>
        </div>
        </div>
        </div>
        </div>

    </>
}

export default Information