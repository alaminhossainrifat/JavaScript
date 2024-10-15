const base = Number(prompt("Enter Base:")); 
const height = Number(prompt("Enter Height:")); 
const area = (base * height) / 2; // Area of a triangle

const length = Number(prompt("Enter Length:"));
const width = Number(prompt("Enter Width:"));
const areaRectangle = length * width; // Area of a rectangle

const radius = Number(prompt("Enter Radius:"));
const areaCircle = Math.PI * radius * radius; // Area of a circle

console.log(`Area of Triangle is(${base} * ${height} / 2): ${area}`);	
console.log(`Area of Rectangle is(${length} * ${width}): ${areaRectangle}`);  
console.log(`Area of Circle is(${radius} * ${radius}): ${areaCircle}`);