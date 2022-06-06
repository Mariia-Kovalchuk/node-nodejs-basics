import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import { stdin, stdout } from 'process';


export const transform = (async () => {
    try {
        const transformStream = new Transform()
        transformStream._transform = (chunk, __, callback) => {
            transformStream.push(chunk.toString().split("").reverse().join(""));
            callback();
        };
        
        await pipeline(stdin, transformStream, stdout)
    } catch (error) {
        console.error('pipeline failed with error:', error.message);
    }
})();