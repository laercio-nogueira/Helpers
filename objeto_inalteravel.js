// Objeto com funcao inalteravel

let data = Object.create({}, {
  valor: {
    writable: true,
    configurable: false,
    value: 0,
  },
  soma: {
    writable: false,
    configurable: false,
    value() {
      return this.valor * 2
    }
  },
  result: {
    get() {
      return (`${this.valor} * 2 = ${this.soma()}`)
    }
  }
})

data.valor = 10;
data.soma = 130 // Metodo soma nao pode ser alterado de fora
console.log(data.result)
