function fun<T>(args: T): T {
  return args
}

let res1 = fun<string>('aaaa')
let res2 = fun<number>(123)

function fun2<T, U, V>(arg1: T, arg2: U, arg3: V): V {
  return arg3
}

class Custom<T> {
  private arr: T[] = []
  getItem(): T[] {
    return this.arr
  }
  setItem(item: T) {
    this.arr.push(item)
  }
}

interface funcArgs {
  length: number
}

interface funcArgs3 extends funcArgs {
  length3: number
}

type funcArgs2 = {
  length: number
}

function getLength<T extends funcArgs3>(arg: T): number {
  return arg.length3
}

let input = document.querySelector('input[type=text]') as HTMLInputElement;
let input2 = <HTMLInputElement>document.querySelector('input[type=text]');

console.log(input.value);

let text = (input as HTMLInputElement).value

interface Cat {
  name: string;
  run(): void
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

const tom: Cat = {
  name: 'Tom',
  run() {
    console.log('tom run')
  }
}
// 谨慎使用as，嵌套深了可能导致运行时错误
isFish(tom)

type Foo = string | number

function checkFooTypeWithNever(foo: Foo) {
  if (typeof foo === 'string') {
  } else if (typeof foo === 'number'){
  } else {
    // 后台增加boolean，这里有提醒
    const check: never = foo
  }
}
// instanceof 收窄变量类型
function testCustomClass<T>(arg: Custom<T>) {
  if (arg instanceof Custom) {
    console.log('instanceof 判断类型')
  } else {}
}

// 使用in做属性检查
interface A {
  a: string;
}
type B = {
  b: string
}

function testIn(x: A | B) {
  if ('b' in x) {
    return x.b
  }
  return x.a
}
// unknown 类似any，是父类型，但是使用时必须指定类型
function testUnknow(callback: unknown) {
  if (typeof callback === 'function') {
    callback()
  }
}

testUnknow(1)

function handler(event: Event) {
  const element = event as unknown as HTMLElement
}

interface Button {
  type: string
  text: string
  text2: string
}
// 使用keyof 类似于对象的 Object.keys
type ButtonKeys = keyof Button
type ButtonKeys2 = 'type' | 'text'

//extends 类型约束
function copy<T extends ButtonKeys>(arg: T): T {
  return arg
}
copy('type')
copy('text2')

// extends 和 keyof 使用，获取value
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = {a: 1, b: 2,c:3}
const va = getValue(obj, 'a')
const obj2 = {test: 'test'}
const vb = getValue(obj2, 'test')

// readOnly
type Readonly2<T> = {
  readonly [P in keyof T]: T[P]
}

interface Obj {
  a: string
  b: string
}
type ReadonlyObj = Readonly2<Obj>

// 提取公共属性
type Extract2<T, U> = T extends U ? T : never

interface Worker2 {
  name: string
  age: number
  email: string
  salary: number
}

interface Student {
  name: string
  age: number
  email?: string
  grade?: number
}
type CommonKeys = Extract2<keyof Worker2, keyof Student>

type Exclude2<T, U> = T extends U ? never : T
type excludeKeys = Exclude2<keyof Worker2, keyof Student>

type Partial2<T> = { [P in keyof T]?: T[P]}
type studentPaticial = Partial2<Student>

type Required2<T> = {[P in keyof T]: T[P]}
type studentRequired = Required<Student>

type Pick2<T, K extends keyof T> = {[P in K]: T[P]}
type StudentPick = Pick2<Student, 'name' | 'age' | 'grade'>

type Omit2<T, K extends string | number | symbol> = {[P in Exclude< keyof T, K>]: T[P]}

type StudentOmit = Omit<Student, 'name'>

type Record2<K extends string | number | symbol, T> = {[P in K]: T}
type recordTest = Record2<'x' | 'y' | 'z', string>

function returnType(a: number, b: string) {
  return a || b
}
type typeofFn = typeof returnType
type returnT = ReturnType<typeofFn>
type paramR = Parameters<typeofFn>

type ReturnType2<T> = T extends (...args : any[]) => infer U ? U : never
type returnT2 = ReturnType2<typeofFn>

type Parameters2<T> = T extends (...args : infer P) => any ? P : never
type paramR2 = Parameters2<typeofFn>
