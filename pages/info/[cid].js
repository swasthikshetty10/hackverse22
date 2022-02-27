import React from 'react'
import Info from '../../src/components/Info'
import NavBar from "../../src/components/Navbar/navbar"
import { PrismaClient } from '@prisma/client'
const axios = require('axios')
const prisma = new PrismaClient()

function Dashboard({ data }) {
    return (
        <div className=''>
            <NavBar />
            <Info data={data} />
        </div>
    )
}
export async function getServerSideProps({ params }) {
    const [cid, loc] = params.cid.split("-")
    const place = await prisma.places.findMany({
        where: {
            name: {
                contains: loc,
            },
        }
    })
    const [data] = place[0].data.filter((item) => item.cid)

    // Pass data to the page via props
    return { props: { data } }
}


export default Dashboard