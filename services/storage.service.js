import { homedir } from 'os';
import { join, basename, dirname, extname, isAbsolute, resolve } from 'path';


const filePath = join(homedir(), '/weather-cli-data.json');

const saveKeyValue = (key, value) => {
    console.log(basename(filePath));
    console.log(dirname(filePath));
    console.log(extname(filePath));
    console.log(isAbsolute(filePath));
    console.log(resolve(filePath, homedir()));
}

saveKeyValue('test', 'test');

export { saveKeyValue };