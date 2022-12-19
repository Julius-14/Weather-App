const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f12be1a06a529454aabb11802e86659d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is current ' + body.current.temperature + ' degrees out. Feelslike its ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast