const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 2000,
        headers: { 'X-RapidAPI-Key': 'bd839b9360msh5e4bdc3619c77a2p1b4cddjsne3d787129c8a' }
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     })

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const lugar = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        lugar,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}