import { readdir } from 'fs/promises';
import { writeFile } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');


export const create = (async () => {
    try {
        const files = await readdir(filesFolderPath);

        if (!files.includes('fresh.txt')) {
            await writeFile('src/fs/files/fresh.txt', "I am fresh and young")
        } else {
            throw new Error("FS operation failed. file already exists")
        }
    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }

})();
