// data-imgperflogname="profileCoverPhoto"

// Type Alias
type ValidSymboal = '#' | '$'

function generate(symbol: ValidSymboal, what = 23, amount?: number): string {
  console.log(what)
  amount = amount || 20
  return symbol + amount
}

// Interface
interface AddConfig {
  num1: number
  num2: number
  what: '+' | '-'
}
function add(opts: AddConfig): number {
  return opts.num1 + opts.num2
}
add({ num1: 10, num2: 23, what: '+' })

// Generics
function identity<T>(arg: T): T {
  return arg
}
identity('hello')
identity<number>(1)

interface Component {
  //   console.log('this is a constructor from Component')
  // constructor() {
  // }
  onInit(): void
}

class App implements Component {
  private readonly userName: string
  public static id = 'app'
  constructor() {
    // super()
    this.userName = 'sokina'
  }
  onInit(): void {
    // super.onInit()
    console.log('========= I am from App')
  }
}

console.log(App.id)
// console.log(App.userName)
let app = new App()
// console.log(app.userName)
// app.onInit()

interface BaseFoo {
  greet(): void
}

class Koo implements BaseFoo {
  greet(): void {
    throw new Error('Method not implemented.')
  }
}

// MFoo.greet()
