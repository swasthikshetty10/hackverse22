import React from 'react'

function Card({ name, maps, img, ratings, price }) {
    return <>
    
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">

            <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={img} />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                        {name}
                    </a>
                </h1>
                <p className="text-grey-darker text-sm">
                <a href={maps}>
                    <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                </a>
                </p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    {price.map((item, index) => (item.exist ? <div key={index} className=""><a className="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
                    <p className="ml-2 text-sm">{item.rate}</p></a></div>
                    : <div key={index} className=""></div>)
                    )}

                <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons.flaticon.com/png/512/477/premium/477406.png?token=exp=1645893778~hmac=afabbff6ef20ce13fd00ff4807b5de2c" width="32" height="32" />
                    <p className="ml-2 text-sm">
                        {ratings}
                    </p>
                </a>
            </footer>

        </article>
        </div>

    </>
}

export default Card