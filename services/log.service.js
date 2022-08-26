import chalk from "chalk";
import dedent from "dedent-js"

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

export { printError, printSuccess, printHelp };