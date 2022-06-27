export const capitalizeString = str => str.toUpperCase();

/*

OR

 */

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase()+string.slice(1);
}

export { capitalizeString};

export const foo='bar';
export const bar = 'foo'; // you can export variables too



/*

USE BELOW AS FALLBACK EXPORT OR IF YOU ONLY WANT TO EXPORT ONE THING FROM A FILE

*/

export default subtract(x,y) {return x-y;}