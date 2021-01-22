function getValue(o: object, key: string) {
  return o[key]
}

const o1 = { name: 'qf', age: 27 }

const name1 = getValue(o1, 'name2')

console.log(name1)