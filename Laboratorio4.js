//Home de instagram
//objeto 1
const usuario1={
    nombre: "Eugenia",
    apellido: "Díaz",
    usuario: "lu04_diaz",
    dirección: {
        cantón: "Quito",
        parroquia: "Puéllaro"
    },
    profesión: "Estilista",
    teléfono: "0981264257"
}
//Desestructuración
const {nombre, apellido, usuario, dirección: {cantón}, teléfono}=usuario1
console.log(nombre, apellido, usuario, cantón, teléfono);
//Objeto 2
const objeto1={
    objeto: "Automóvil",
    color: "Gris",
    marca: "BMW",
    características:{
        potencia: "220HP",
        combustible: "Gasolina",
        velocidad: "260km/h",
        capacidad: "4 personas",
        peso: "1025kg"
    },
    año: 2024,
    modelo: "X6 M Competition"
}
//Desestructuración
const {marca, modelo, color, características:{potencia, combustible}, año}=objeto1
console.log(marca, modelo, color, potencia, combustible, año);
//Arreglos
const homeInstagram=[
    {
        home: "publicaciones",
        explorar: "fotos",
        reels: "videos",
        nuevo: "publicación",
        mensajes: "amigos",
        perfil: "información",
        notifiaciones: "reacciones"
    } 
]
const influencers=[
    {
        nombre: "Raúl",
        apellido: "Álvarez",
        nacionalidad: "española",
        plataforma: "twitch",
        contenido: "juegos",
        seudónimo: "Auronplay"
    },
    {
        nombre: "José",
        apellido: "Covarrubias",
        nacionalidad: "mexicana",
        plataforma: "tik tok",
        contenido: "CoD mobile",
        seudónimo: "Rey tamalero"
    }
]
const usuariosInstagram=influencers.map((u)=>{
    return {
        nombre: u.nombre.toUpperCase(),
        apellido: u.apellido.toUpperCase(),
        seudónimo: u.seudónimo.toLowerCase()
    }
})
console.log(homeInstagram);
console.log(usuariosInstagram);
