console.log("\n---------Arreglo de Elementos a Usar:---------\n");

const itemsArray = [
    {
        name: "Fundamentos de Programación",
        semester: 1,
        price: 20.5,
    },
    {
        name: "Programación de Estructuras Dinámicas",
        semester: 2,
        price: 15.6,
    },
    {
        name: "Programación Orientada a Objetos",
        semester: 3,
        price: 45,
    },
    {
        name: "Programación WEB",
        semester: 4,
        price: 36,
    },
    {
        name: "Programación de Dispositivos Móviles",
        semester: 5,
        price: 50,
    },
    {
        name: "Análisis de Algoritmos",
        semester: 6,
        price: 43,
    },
    {
        name: "Técnicas de Simulación en Computadoras",
        semester: 7,
        price: 35,
    },
    {
        name: "Programación Declarativa",
        semester: 8,
        price: 30,
    },
    {
        name: "Aplicaciones Código Abierto",
        semester: 9,
        price: 47,
    },
    {
        name: "Teoría de Lenguajes de Programación",
        semester: 10,
        price: 25,
    },
];

console.log("Imprimiendo el Arreglo Original \n");
console.log(itemsArray);
console.log("\n------------------\n");

// Array Type for filter
const filteredItems = itemsArray.filter((item) => {
    return item.semester <= 5;
});

console.log("Usando Filter: \n");
console.log(filteredItems);
console.log("\n------------------\n");

// Array Type for find
const foundItem = itemsArray.find((item) => {
    return item.name === "Fundamentos de Programación";
});

console.log("Usando Find: \n", foundItem);
console.log("\n------------------\n");

/////////////////////////////////////

// forEach
console.log("Usando forEach: ");
itemsArray.forEach((item) => {
    console.log(item.name);
});
console.log("\n------------------\n");

// using some method
const afterSixSemester = itemsArray.some((item) => {
    return item.semester > 6;
});

console.log("Usando Some:\n");

afterSixSemester
    ? console.log("Existe al menos una materia de sexto semestre")
    : console.log("Ninguna materia es de sexto semestre");

// using  every method
console.log("Usando Every:\n");
const bookPrice = itemsArray.every((item) => {
  return item.price <= 60;
});

bookPrice
    ? console.log("Todos los libros tienen un precio menor a 60")
    : console.log("Algunos libros tienen un precio mayor a 60");

console.log("\n------------------\n");

// using reduce method
console.log("Usando Reduce:\n");

const total = itemsArray.reduce((previousValue, currentValue) => {
    return currentValue.price + previousValue;
}, 0);

console.log(`Total: $${total}`);

console.log("\n------------------\n");


// using includes method
console.log("Usando Includes:\n");
const yearsArr = [2022, 2023, 2024, 2025, 2026];

const includesYear = yearsArr.includes(2022);

includesYear
        ? console.log("El año 2022 está incluido en el arreglo")
        : console.log("El año 2022 no está incluido en el arreglo");

console.log("\n------------------\n");

// using map method
console.log("Usando Map:\n");
const subjectAndSemester = itemsArray.map((item) => {
  return `La materia ${item.name} corresponde al semestre ${item.semester}`;
});

console.log(subjectAndSemester);
console.log("\n------------------\n");