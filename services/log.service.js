import chalk from "chalk";
import dedent from "dedent-js"
import { getIcon } from "./api.service.js";

const printError = (error) => {
    console.log(chalk.red('ERROR!') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.green('SUCCESS!' ) + ' ' + message);
}

const printHelp = () => {
    console.log(dedent(`
        ${chalk.cyan('HELP!')}
        - without params => return weather
        -s [CITY] save city for forecasting.
        -t [API_TOKEN] save API token
        -h show help
    `))
}

const printWeather = (res) => {
    console.log(dedent(`
        ${chalk.cyan('Weather report!')}
        Погода у місті ${res?.name}.
        ${getIcon(res?.weather[0]?.icon)} ${res?.weather[0]?.description}.
        Температура ${res?.main?.temp} °C. Відчувається як ${res?.main?.feels_like} °C.
        Швидкість вітру: ${res?.wind?.speed} м/c.
    `))
};

export { printError, printSuccess, printHelp, printWeather };