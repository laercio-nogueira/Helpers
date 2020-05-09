console.clear()

class MyClass {

  constructor () {
    this.item = 0
  }

  get object() {
    return this.item;
  }

  set object (item) {
    return this.item = item;
  }

  static setItem (item) {
    this.item = item
  }

  static getItem () {
    return this.item
  }

  useMethod(item) {
    this.item = item
  }
}

console.log('--------------------------------\n')

console.log('Classe nao instanciada:\n')
console.log(MyClass) // [Function: MyClass]
console.log(MyClass.constructor()) // [Function: anonymous]

console.log(MyClass.object, '-acessando sem settar nada') // undefined 
MyClass.object = 10 
console.log(MyClass.object, '- Acessando o object depois de settar 10') // 10

console.log(MyClass.getItem(), '- metodo getItem() sem set') // undefined
MyClass.setItem(40)
console.log(MyClass.getItem(), '- metodo getItem() com set 40') // 40

// Não pode usar um metodo publico, sem instanciar uma classe
try {
  MyClass.useMethod(60)
} catch ({ message }) {
  console.log(message) // MyClass.useMethod is not a function
}

console.log('--------------------------------\n')

console.log('Classe instanciada:\n')
const newClass = new MyClass()
console.log(newClass) // MyClass { item: 0 }
console.log(newClass.object) // 0
newClass.object = 20
console.log(newClass.object) // 20

// Não pode usar um metodo estático, depois de instanciado a classe
try {
  newClass.getItem()
} catch ({ message }) {
  console.log(message) // newClass.getItem is not a function
}

