import { rename as renameFsPromise, readdir } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const wrongFileName = 'wrongFilename.txt'
const properFileName = 'properFilename.md'

const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');
const wrongFilePath = path.join(filesFolderPath, wrongFileName);
const properFilePath = path.join(filesFolderPath, properFileName);


export const rename = (async () => {
    try {
        const files = await readdir(filesFolderPath);

        if (files.includes(wrongFileName)&&!files.includes(properFileName)) {
            await renameFsPromise(wrongFilePath, properFilePath);
        } else {
            throw new Error(`FS operation failed. There's no file ${wrongFileName} or ${properFileName} already exists.`)
        }

    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }

})();