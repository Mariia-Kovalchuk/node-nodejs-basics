const { createHash } = await import('crypto');
 import { readFile } from 'fs/promises';


import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const filePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = (async () => {

    const hash = createHash('sha256');
    const data = await readFile(filePath);
    hash.update(data);
    console.log(hash.digest('hex'));
})();


