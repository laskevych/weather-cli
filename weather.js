#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveValueByKey } from './services/storage.service.js'

const saveToken = async (token) => {
    try {
        await saveValueByKey('token', token);

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
}

initCLI();