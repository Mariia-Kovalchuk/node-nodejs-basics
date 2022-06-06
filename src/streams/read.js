import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import { stdout } from 'process';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const readFilePath = path.join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');

export const read = (async () => {
    try {
        const readStream = createReadStream(readFilePath)
        await pipeline(readStream, stdout)
        console.log('Pipeline succeeded');
        
    } catch (err) {
        console.error('pipeline failed with error:', err.message);
    }

}
  
)();
