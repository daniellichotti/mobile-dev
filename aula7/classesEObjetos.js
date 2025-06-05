class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    makeSound() {
        console.log('tec tec tec')
    }
}

const newProduct1 = new Product('Teclado', 'R$ 30,00')
const newProduct2 = new Product('Mouse', 'R$ 9,99')

console.log(`O ${newProduct1.name} custa ${newProduct1.price}`)
console.log(`O ${newProduct2.name} custa ${newProduct2.price}`)
newProduct1.makeSound()