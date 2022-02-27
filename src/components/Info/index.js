import Image from "next/image";
import React, { useState } from "react";
import place from "../../../public/place.jpeg";
import Card from "./card";
import { Fade } from "react-awesome-reveal";


function Information({ data, hotels, place }) {
        console.log(place)
        const [expense, setExpense] = useState([])
        return <>

                {/* Location Info */}
                <section className="text-gray-600 body-font">
                        <Fade>
                                <div className=" flex px-5 py-24 md:flex-row flex-col justify-center gap-4 items-center">
                                        <div className="lg:pl-20">
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
                                <div className="grid gap-10 gird-cols-1 sm:gird-cols-2 xl:grid-cols-3">
                                        {
                                                hotels.suggestions[1].entities.map((item, index) => {
                                                        console.log(item);
                                                        return <Card
                                                                key={index}
                                                                setExpense={setExpense}
                                                                expense={expense}
                                                                name={item.name}
                                                                maps="/"
                                                                img="https://picsum.photos/600/400/?random"
                                                                desc={item.caption}
                                                                ratings={random(2, 5)}
                                                                price={random(2100, 5000)}
                                                        />
                                                })
                                        }



                                </div>
                        </div>
                </Fade >

                {/* Airports Nearby Cards 
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
                </Fade> */}



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
                                                                {expense.map((ele, idx) => <tr key={idx} class="bg-white border-b">
                                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                {ele.type}
                                                                        </td>
                                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                {ele.name}
                                                                        </td>
                                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                {ele.price}
                                                                        </td>
                                                                </tr>
                                                                )}



                                                                <tr class="bg-gray-300 border-b">
                                                                        <td class=""></td>
                                                                        <td class=""></td>
                                                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                                                Final Amount Expense
                                                                        </td>
                                                                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                                                <Sum arr={expense} />
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

export default Information;

function random(min, max) {
        return Math.floor((Math.random()) * (max - min + 1)) + min;
}
function Sum({ arr }) {
        let sum = 0;
        arr.forEach(element => {
                sum += element.price;
        });
        console.log(sum)
        return <>{sum}</>
}