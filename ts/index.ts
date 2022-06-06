export const name2: string = 'yqf'

function mySum (x: number, y: number, z?: number): number {
  return x + y + z
}

let result = mySum(1, 2, 4)
// 类型别名

type sumType = (x: number, y: number) => number
let mySum2: sumType = mySum

console.log(result)

interface ISearchFunc {
  readonly id: string; // 注意是分号
  name: string;
  age?: number;
}

let sf: ISearchFunc = {
  id: 'aaa',
  name: 'qf',
}

name2.toUpperCase()

mySum(345, 456);

interface A {
  a: number;
  b?: string;
}

const obj: A = {
  a: 123
}

const __DEV__ = false

let arr: number[] = [1,2,3]

// tuple 元组 多种类型的数组
let arr2: [string, number] = ['', 2]


interface IRadio {
  switchRadio(): void
}

interface IBattery {
  checkBattery(): void
}

interface IRadioWithBattery extends IRadio, IBattery {}
class Car implements IRadio {
  switchRadio() {

  }
}

class Phone implements IRadio, IBattery {
  switchRadio() {}
  checkBattery() {}
}

class Phone2 implements IRadioWithBattery {
  switchRadio() {}
  checkBattery() {}
}

const enum Direction {
  up = 10,
  down,
  left,
  right
}

console.log(Direction.left)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result3 = swap(['str', 123])


// 范型 约束关系 extends
interface ILength {
  length: number
}
function echoWithLen<T extends ILength>(param: T): T {
  console.log(param.length)
  return param
}

const result4 = echoWithLen({length: 4})
const result5 = echoWithLen('2233')
const result6 = echoWithLen([1,2,3])

// 范型 与类和接口 结合
class Queue<T> {
  private data = []
  push(val: T) {
    return this.data.push(val)
  }
  pop(): T {
    return this.data.pop()
  }
}

const queue = new Queue<number>()
queue.push(123)
const result7 = queue.pop()

interface IKeyPair<T, U> {
  key: T;
  value: U
}

let kp1: IKeyPair<number, string> = {key: 333, value: ''}
let kp2: IKeyPair<string, Date> = {key: '333', value: new Date()}

interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}
let plus2: IPlus<number> = plus
let connect2: IPlus<string> = connect

//类型断言 as <number>a

function getLength(input: string | number): number {
  // if (input as string) {
  if((<string>input).length) {
    return (<string>input).length
  } else {
    return <number>input
  }
}

// 声明文件
declare var jQuery: (selector: string) => any

// jQuery('#aaa')


export namespace Utils {
  export function log(msg): void {
    console.log(msg)
  }
  export function warn(msg): void {
    console.warn(msg)
  }
}

let bool: boolean[];
bool = [!!1, true, Boolean('true'), null, undefined]


interface Name {
  a: string;
  b: string;
}
// 内联类型注解, 当不是复用时，可以不用interface声明
let name3: {
  a: string;
  b: string;
}


type Person = {
	name: string;
  age: number;
} | {
	height: number;
  weight: number;
} | {
	id: number;
}

let person: Person = {
  id: 1
}