import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const readFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
const writeFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');

export const compress = (async () => {
    try {
        const readStream = createReadStream(readFilePath)
        const writeStream = createWriteStream(writeFilePath)
        const gzip = createGzip();
        await pipeline(readStream, gzip, writeStream )
        console.log('Pipeline succeeded');
        
    } catch (err) {
        console.error('pipeline failed with error:', err.message);
    }

}
  
)();
