#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';

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
        //todo save token
    }
}

initCLI();