//1
export const capitalize = (text) => {
    return text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

//2
 export const daraja = (number) => {
    return number ** 2;
}

//3
export const infoOfRectangle = (a, b) => {
    const perimeter = (a + b) * 2;
    const surface = a * b;
    return `Perimeter is equal to ${perimeter}. Surface is equal to ${surface}.`;
}

//4
 export const infoOfSquare = (a) => {
    const perimeter = a * 4;
    const surface = a * a;
    return `Perimeter is equal to ${perimeter}. Surface is equal to ${surface}.`;
}

//5
export const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

//6
export const isEvenOrOdd = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//7
export const maxNumber = (arr) => {
    return Math.max(...arr);
}

//8
export const minNumber = (arr) => {
    return Math.min(...arr);
}

//9
export const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

//10
export const reverseString = (str) => {
    return str.split("").reverse().join("");
}