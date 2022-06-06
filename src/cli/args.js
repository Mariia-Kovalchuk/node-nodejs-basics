import { argv } from 'process';

export const parseArgs = (() => {
    const parsedResult = argv.reduce((acc, item, index, arr) => {
        if (item.includes("--")) {
           acc.push(`${item.slice(2)} is ${arr[index+1]}`) 
        }
        return acc
    }, [])
    console.log(parsedResult.join(", "));
})();
