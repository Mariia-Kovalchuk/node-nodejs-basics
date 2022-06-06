import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const writeFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');

export const write = (async () => {
    try {
        const writeStream = createWriteStream(writeFilePath)
        await pipeline(stdin, writeStream)
    } catch (error) {
        console.error('pipeline failed with error:', error.message);
    }
})();