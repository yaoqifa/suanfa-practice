type Diff<T, U> = T extends U ? never : T // T的差集

type Filter<T, U> = T extends U ? T : never // 交集

type diff1 = Diff<'a' | 'c', 'b' | 'a'> // T 中有，U中没有
type filter1 = Filter<'a' | 'c', 'b' | 'a'> // T U共有