import React from 'react'

function Card({ name, maps, img, ratings, price, desc, key, expense, setExpense, type }) {
    console.log(expense)
    const handler = () => {
        const entry = { type, price, name }
        // if (expense.map((e) => e.name).length != 0) {
        //     const array = expense.filter(ele => ele.name != name)
        //     setExpense(array)
        // }
        // else {
        //     setExpense([...expense, entry])
        // }
        setExpense([...expense, entry])
    }
    return <>
        <div className="my-1 px-4 w-sm " key={key}>
            <article className="overflow-hidden rounded-lg shadow-xl p-5">
                <div className='p-2 md:p-3'>

                    <h1 className="text-lg mb-5">
                        <a className="no-underline hover:underline text-black" href="#">
                            {name}
                        </a>
                    </h1>
                    <p className="text-md mb-5">

                    </p>
                    <div className="flex items-center justify-between leading-tight ">

                        <label class="flex items-center justify-center mt-3 mb-3">
                            <input onChange={handler} type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" />
                        </label>

                        <p className="text-grey-darker text-sm">
                            <a href={maps}>
                                <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0">View on Google Maps</button>
                            </a>
                        </p>
                    </div>

                </div>
                <footer className="flex items-center justify-between leading-none p-2 ">
                    {price.map((item, index) => (item.exist ? <div key={index} className=""><a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://cdn-icons-png.flaticon.com/512/3462/3462067.png" width="32" height="32" />
                        <p className="ml-2 text-sm">{item.rate}</p></a></div>
                        : <div key={index} className=""></div>)
                    )}

                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://cdn.discordapp.com/attachments/929033745422487718/947358772874051634/477406.png" width="32" height="32" />
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