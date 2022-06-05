import { unlink } from 'fs/promises';
import { readdir } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const fileName ='fileToRemove.txt'
const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');
const fileToRemovePath = path.join(filesFolderPath, fileName);


export const remove = (async () => {
    try {
        const files = await readdir(filesFolderPath);

        if (files.includes(fileName)) {
            await unlink(fileToRemovePath);
        } else {
            throw new Error(`FS operation failed. There's no file ${fileName}`)
        }

    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }

})();