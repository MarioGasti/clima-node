const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ea76485dcf69a66563389234eef036ee&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}