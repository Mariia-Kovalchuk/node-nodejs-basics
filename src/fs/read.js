import { readFile } from 'fs/promises';
import { readdir } from 'fs/promises';


import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');
const fileToReadPath = path.join(filesFolderPath, 'fileToRead.txt');



export const read = (async () => {

    try {
        const files = await readdir(filesFolderPath);

        if (files.includes('fileToRead.txt')) {
            const content = await readFile(fileToReadPath, { encoding: 'utf8' });
            console.log(content);
        } else {
            throw new Error("FS operation failed. There's no file fileToRead.txt")
        }
    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }


})();