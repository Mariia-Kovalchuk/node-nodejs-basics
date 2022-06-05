import { cp } from 'fs/promises';
import { readdir } from 'fs/promises';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const prevDirName = 'files'
const newDirName = 'files_copy'

const filesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), prevDirName);
const newFilesFolderPath = path.join(dirname(fileURLToPath(import.meta.url)), newDirName);

export const copy = (async () => {
    await cp(filesFolderPath, newFilesFolderPath)

})();