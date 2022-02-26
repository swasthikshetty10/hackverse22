
import { PrismaClient } from '@prisma/client'
const axios = require('axios')
const { ApifyClient } = require('apify-client'); const client = new ApifyClient({
    token: process.env.APIFY_API_ID,
});
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { location } = req.query
    try {
        const data = await getHotels(location);
        res.json(data)
    }
    catch (err) {
        console.log(err)
        res.json({})
    }
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