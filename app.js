const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// clima.getClima(-31.400000, -64.190002)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {

    // return await direccion;
    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return await `El temperatura actual de ${coords.direccion} es de ${temp}°C.`;
    } catch (error) {
        return await `No se pudo determinar la temperatura de ${direccion.direccion}.`;
    }
}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })