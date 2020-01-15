const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// getLugarLatLng(argv.direccion)
//     .then(console.log);

// getClima(-5.710000, -79.279999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords.lat, coords.lng);
        return `El clima de  ${coords.lugar} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)