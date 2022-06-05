import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
// import { access } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), 'files');

export const list = async () => {
    
    try {
        if (existsSync(filesFolderPath)) {
            const files = await readdir(filesFolderPath);
            console.table(files);
            return files
        } else {
            throw new Error("FS operation failed. 'files' folder doesn't exists")
        }
    } catch (err) {
        console.log(err.name + ': ' + err.message);
    }

};

list()



