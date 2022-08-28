import axios from "axios";
import { getValueByKey, STORAGE_KEYS } from './storage.service.js';


const getWeather = async (city) => {
    const token = await getValueByKey(STORAGE_KEYS.token);

    if (!token) {
        throw new Error('Please save token by flag -t.');
    }


    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appId: token,
            lang: 'ua',
            units: 'metric'
        }
    });

    return data;
}

export { getWeather }