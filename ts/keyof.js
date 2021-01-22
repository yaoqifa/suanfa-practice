function getValue(o, key) {
    return o[key];
}
var o1 = { name: 'qf', age: 27 };
var name1 = getValue(o1, 'name2');
console.log(name1);
