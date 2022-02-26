import main from '../../../Utility/scraper';
const axios = require('axios')
export default async function andler(req, res) {
    const { location } = req.query
    try {
        const data = await getHotels(location);
        res.json(data)
    }
    catch (err) {
        next(err)
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