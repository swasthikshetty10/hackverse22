import { PrismaClient } from '@prisma/client'
const axios = require('axios')
const { ApifyClient } = require('apify-client');
const client = new ApifyClient({
    token: process.env.APIFY_API_ID,
});
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { location } = req.query
    const getPlace = await prisma.places.findMany({
        where: {
            name: {
                contains: location,
            },
        }
    })
    try {
        if (getPlace.length!=0) {
            res.json(getPlace[0].data)
        }
        else {
            const data = await getDetails(location);
            const entry = await prisma.places.create({
                data: {
                    name: location,
                    data: data
                },
            })
            res.json(data)
        }
    }
    catch (err) {
        console.log(err)
        res.json([])
    }
}
const getDetails = async (location) => {
    const input = {
        "searchStringsArray": [
            "tourist places near " + location
        ],
        "maxCrawledPlaces": 15,
        "language": "en",
        "maxImages": 3,
        "maxReviews": 5,
        "proxyConfig": {
            "useApifyProxy": true
        }
    };
    const run = await client.actor("drobnikj/crawler-google-places").call(input);
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    return items
}


const getHotels = async (location) => {
    var options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: { query: location, locale: 'en_US', currency: 'INR' },
        headers: {
            'x-rapidapi-host': 'hotels4.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    };
    const res = await axios.request(options)
    if (res.status == 200) {
        return res.data
    }
    return res.data
}