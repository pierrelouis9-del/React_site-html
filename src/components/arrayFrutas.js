
console.log("1 ")
console.log(" ")

const frutas =["Maçã","Limão","Goiaba"]

const produtos =frutas.map(fruta => {
    return fruta
})
console.log(produtos)

const numero =[2,5,7,9,10]

const nume =numero.map(num => {
    return num *2
})
console.log(nume)

console.log(" ")
console.log("--------------------------------------------------")
console.log(" ")
console.log(" ")
console.log("2 ")
console.log(" ")


const preco = ["R$ 10.00", "R$ 25.50", "R$ 75.90"];
const n_preco = preco.map(novo => {
    const newe = novo.replace("R$ ","");
    const num_novo = parseFloat(newe);
    return num_novo
    
})
console.log(n_preco)

console.log(" ")
console.log("--------------------------------------------------")
console.log(" ")
console.log(" ")
console.log("3 ")
console.log(" ")

const usuarios = [
    { id: 1, nome: "Aline", idade: 25 },
    { id: 2, nome: "Bruno", idade: 30 },
    { id: 3, nome: "Carla", idade: 22 }
    ];

    const u_nome = usuarios.map(nom => {
        return `${nom.nome} ${nom.idade} ${nom.id}`

    })
    console.log(u_nome)

    console.log(" ")
    console.log("--------------------------------------------------")
    console.log(" ")
    console.log(" ")
    console.log("4 ")
    console.log(" ")
  

const redes = ["github", "linkedin", "instagram"];   
const c_rede = redes.map((res) =>{
    return `https://www.${res}.com`
})
console.log(c_rede)