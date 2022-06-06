import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const readFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');
const writeFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');

export const decompress = (async () => {
    try {
        const readStream = createReadStream(readFilePath)
        const writeStream = createWriteStream(writeFilePath)
        const unzip = createUnzip();
        await pipeline(readStream, unzip, writeStream )
        console.log('Pipeline succeeded');
        
    } catch (err) {
        console.error('pipeline failed with error:', err.message);
    }

}
  
)();