const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?key=b54a5aa330f0428f857d16bd7243f6f8&q=12.7571%2C124.1295&pretty=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.results.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng,
                location: body.results[0].formatted
            })
        }
    })
}
module.exports = geocode