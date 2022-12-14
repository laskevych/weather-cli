import axios from "axios";
import { getValueByKey, STORAGE_KEYS } from './storage.service.js';

const getWeather = async () => {
    const token = await getValueByKey(STORAGE_KEYS.token);

    if (!token) {
        throw new Error('Please save token by flag -t.');
    }

    const city = await getValueByKey(STORAGE_KEYS.city);
    if (!city) {
        throw new Error('Please save city by flag -s.');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appId: token,
            units: 'metric'
        }
    });

    return data;
}

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return 'âī¸';
		case '02':
			return 'đ¤ī¸';
		case '03':
			return 'âī¸';
		case '04':
			return 'âī¸';
		case '09':
			return 'đ§ī¸';
		case '10':
			return 'đĻī¸';
		case '11':
			return 'đŠī¸';
		case '13':
			return 'âī¸';
		case '50':
			return 'đĢī¸';
	}
};

export { getWeather, getIcon }