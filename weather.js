#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveValueByKey, STORAGE_KEYS } from './services/storage.service.js'
//ebb3f7ebf60cb5a08340c51c9b19d8c1
const saveToken = async (token) => {
    try {
        await saveValueByKey(STORAGE_KEYS.token, token);

        printSuccess('Token was saved.');
    } catch (error) {
        printError(`Token not saved. Details: ${error.message}`);
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) { 
        printHelp();
        printError('test');
        printSuccess('test');
    }

    if (args.s) {
        //todo save city
    } 
        
    if (args.t) {
        saveToken(args.t);
    }

    getWeather('Kyiv');
}

initCLI();