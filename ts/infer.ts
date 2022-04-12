type Ids = string[]

type ParamType<T> = T extends Array<infer E> ? E : never

type idParam = ParamType<Ids>

type ArrayType<T> = T extends (infer E)[] ? E : T
type test1 = ArrayType<[number, string]> // number | string 协变关系，或的关系

// 函数中 逆变关系，且的关系

type Func<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never
type test2 = Func<{ a: (x: string) => void; b: (x: number) => void }> // never
