import { cloneDeep } from '../src/code/CloneDeep'

test('普通对象深拷贝', () => {
  let obj1 = {
    name: 'hello',
    child: {
      name: 'xxm',
    },
  }

  let obj2 = cloneDeep(obj1)
  console.assert(obj1 !== obj2)
  console.assert(obj1.name === obj2.name)
  console.assert(obj1.child !== obj2.child)
  console.assert(obj1.child.name === obj2.child.name)
  obj2.name = 'world'
  console.assert(obj1.name === 'hello')
})

test('数组深拷贝', () => {
  let arr1 = [
    [1, 2],
    [3, 4],
  ]

  let arr2 = cloneDeep(arr1)

  console.assert(arr1 !== arr2)

  arr2[0][0] = 5
  console.assert(arr1[0][0] === 1)
})

test('函数的深拷贝', () => {
  const fn1 = function () {
    return 1
  }

  fn1.xxx = { yyy: { zzz: 1 } }

  const fn2 = cloneDeep(fn1)
  console.assert(fn1 !== fn2)
  console.assert(fn1.xxx !== fn2.xxx)
  console.assert(fn1.xxx.yyy !== fn2.xxx.yyy)
  console.assert(fn1.xxx.yyy.zzz === fn2.xxx.yyy.zzz)
  console.assert(fn1() === fn2())
})

test('正则的深拷贝', () => {
  const reg1 = /hi\d/gi
  const reg2 = cloneDeep(reg1)

  console.assert(reg1 !== reg2)
})

test('日期的深拷贝', () => {
  const d1 = new Date()

  const d2 = cloneDeep(d1)

  console.assert(d1 !== d2)
})

test('复杂对象', () => {
  const a1: any = {
    i: Infinity,
    s: '',
    bool: false,
    n: null,
    u: undefined,
    sym: Symbol(),
    obj: {
      i: Infinity,
      s: '',
      bool: false,
      n: null,
      u: undefined,
      sym: Symbol(),
    },
    array: [
      {
        nan: NaN,
        i: Infinity,
        s: '',
        bool: false,
        n: null,
        u: undefined,
        sym: Symbol(),
      },
      123,
    ],
    fn: function () {
      return 'fn'
    },
    date: new Date(),
    re: /hi\d/gi,
  }
  let a2 = cloneDeep(a1)

  console.assert(a2 !== a1)
  console.assert(a2.i === a1.i)
  console.assert(a2.s === a1.s)
  console.assert(a2.bool === a1.bool)
  console.assert(a2.n === a1.n)
  console.assert(a2.u === a1.u)
  console.assert(a2.sym === a1.sym)
  console.assert(a2.obj !== a1.obj)
  console.assert(a2.array !== a1.array)
  console.assert(a2.array[0] !== a1.array[0])
  console.assert(a2.array[0].i === a1.array[0].i)
  console.assert(a2.array[0].s === a1.array[0].s)
  console.assert(a2.array[0].bool === a1.array[0].bool)
  console.assert(a2.array[0].n === a1.array[0].n)
  console.assert(a2.array[0].u === a1.array[0].u)
  console.assert(a2.array[0].sym === a1.array[0].sym)
  console.assert(a2.array[1] === a1.array[1])
  console.assert(a2.fn !== a1.fn)
  console.assert(a2.date !== a1.date)
  console.assert(a2.re !== a1.re)
})
