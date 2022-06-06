import { cp, readdir } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const prevFolderName = 'files'
const newFolderName = 'files_copy'

const dirName = dirname(fileURLToPath(import.meta.url))
const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), prevFolderName);
const newFilesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), newFolderName);

export const copy = (async () => {
    try {
        const files = await readdir(dirName)
        if (files.includes(prevFolderName) && !files.includes(newFolderName)) {
            await cp(filesFolderPath, newFilesFolderPath, { recursive: true })
            console.log(`The folder '${prevFolderName}' was copied successfully.` );
        } else {
            throw new Error(`FS operation failed.  '${prevFolderName}' folder doesn't exists or folder '${newFolderName}' has already been created.`)
        }
    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }

})();