import { env } from 'process';

// env.RSS_name1 = "value1"
// env.RSS_name2 = "value2"

export const parseEnv = (() => {
    const filter="RSS_"
    const variables = Object.keys(env).filter(el=>el.includes(filter))
    variables.length ?  variables.map(el => console.log(`${el} = ${env[el]};`)) : console.log(`There is no variables with prefix  ${filter} in env`);

})();
