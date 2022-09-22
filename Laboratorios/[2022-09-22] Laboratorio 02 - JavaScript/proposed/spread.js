const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@test.com",
        age: 60,
        salary: 1099,
    },
    {
        id: 2,
        name: "Robert Singer",
        email: "bobby@test.com",
        age: 62,
        salary: 999,
    },
    {
        id: 3,
        name: "Misha Collins",
        email: "castiel@test.com",
        age: 35,
        salary: 899,
    },
    {
        id: 4,
        name: "Dean Winchester",
        email: "dean@test.com",
        age: 41,
        salary: 799,
    },
    {
        id: 5,
        name: "Sam Winchester",
        email: "sam@test.com",
        age: 36,
        salary: 699,
    },
];

// 1. Mostrar el arreglo sin haber sido modificado
console.log("\n---------Arreglo sin modificación---------\n");
console.log(users);

// 2. Crear una función llamada updateUser, la cual deberá cumplir con la funcionalidad 
//    de actualizar el name y el salary del usuario que coincida con el id enviado.
const updateUser = (idUser, newName, newSalary) => {
    const userIndex = users.findIndex( (item) => item.id === idUser );
    const user = users[userIndex];

    const userClone = { ...user, name: newName, salary: newSalary };

    users.splice(userIndex, 1, userClone);
};

updateUser(1, "John Winchester", 1500);

console.log("\n---------Arreglo luego de la modificación---------\n");
console.log(users);

////////////////////////////////////////////
// 3. Crear una función llamada usersWithoutId la cual mostrará toda la información de los usuarios, exceptuando el id
// Usar map y del spread operator
console.log("\n---------Función para mostrar los usuarios sin el ID---------\n");
function usersWithoutId(){
    const output = users.map(({ id, ...rest }) => rest)
    console.log(output)
}

usersWithoutId();