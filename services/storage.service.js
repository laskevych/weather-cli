import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs'


const configFilePath = join(homedir(), '/weather-cli-data.json');

const STORAGE_KEYS = {
    token: 'token',
    city: 'city'
};

const saveValueByKey = async (key, value) => {
    let config = await getConfig();

    config[key] = value;

    await promises.writeFile(configFilePath, JSON.stringify(config));
};

const getValueByKey = async (key) => {
    let config = await getConfig();

    return config[key];
};

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
};

const getConfig = async () => {
    let config = {};
    if (await isExist(configFilePath)) {
        const file = await promises.readFile(configFilePath);
        config = JSON.parse(file);
    }

    return config;
};

export { saveValueByKey, getValueByKey, STORAGE_KEYS };