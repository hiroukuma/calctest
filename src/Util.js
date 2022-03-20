export function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function getNumber(str) {
    if(str == null ||
       str == 'null' ||
       str == undefined ||
       str == '' ) return 0;

    return parseInt(str.replace(/[^0-9]/g, ''));
}
