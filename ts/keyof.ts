//  keyof与Object.keys略有相似，只是 keyof 是取 interface 的键，而且 keyof 取到键后会保存为联合类型。

function getValue(o: object, key: string) {
  return o[key]
}

const o1 = { name: 'qf', age: 27 }

const name1 = getValue(o1, 'name2')

console.log(name1)


function getValue2<T extends object, K extends keyof T>(o: T, key: K): T[K] {
  return o[key]
}

const o2 = { name: 'qf', age: 27 }
const name2 = getValue2(o2, 'name') // 有提醒

interface IUser {
  name: string;
  age: number;
}

type keys = keyof IUser // 默认为联合类型
