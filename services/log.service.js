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
        ${chalk.yellow(`Weather in ${res?.name}`)}
        ${getIcon(res?.weather[0]?.icon)} ${capitalizeFirstLetter(res?.weather[0]?.description)}.
        🌡 Temp ${Math.round(res?.main?.temp)} °C. Feels like ${Math.round(res?.main?.feels_like)} °C.
        💨 Wind speed: ${res?.wind?.speed} m/s.
    `))
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export { printError, printSuccess, printHelp, printWeather };