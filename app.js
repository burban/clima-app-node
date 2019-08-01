/**
 * 
 */

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-38.730000, -72.580002)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);

        console.log(`El clima de ${coords.direccion} es de ${temp}`);

    } catch (error) {
        return `No se puedo determinar el clima de ${error}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);