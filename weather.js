#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { getValueByKey, saveValueByKey, STORAGE_KEYS } from './services/storage.service.js'

const saveToken = async (token) => {
    try {
        await saveValueByKey(STORAGE_KEYS.token, token);

        printSuccess('Token was saved.');
    } catch (error) {
        printError(`Token not saved. Details: ${error.message}`);
    }
};

const saveCity = async (city) => {
    try {
        await saveValueByKey(STORAGE_KEYS.city, city);

        printSuccess('City was saved.');
    } catch (error) {
        printError(`City not saved. Details: ${error.message}`);
    }
};

const getForcast = async () => {
    try {
        const weatherData = await getWeather();
        printWeather(weatherData);
    } catch (error) {
        let errorMessage;
        if (error?.response?.status === 404) {
            errorMessage = `Incorrect city ${getValueByKey(STORAGE_KEYS.city)}`;
        } else if (error?.response?.status === 401) {
            errorMessage = `Incorrect token ${getValueByKey(STORAGE_KEYS.token)}`;
        } else {
            errorMessage = error.message;
        }

        printError(errorMessage);
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) { 
        printHelp();
    }

    if (args.s) {
        saveCity(args.s);
    }
        
    if (args.t) {
        saveToken(args.t);
    }

    getForcast();
}

initCLI();