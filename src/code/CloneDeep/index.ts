// 常规深克隆 序列化和反序列化
// 只支持JSON支持的格式 object,array,string,number,true,false,null
// undefined，Date，RegExp等数据类型都不支持。对于它不支持的数据都会直接忽略该属性。

export const cloneDeep = (target: any, cache = new Map()) => {
  if (cache.get(target)) {
    // 如果该属性已经存在就直接return
    return cache.get(target)
  }
  if (target instanceof Object) {
    let dist: any
    if (target instanceof Array) {
      // 如果是一个数组就创建一个[]
      dist = []
    } else if (target instanceof Function) {
      dist = (...args: any[]) => {
        // 如果是函数就返回函数本身,确保返回值相同
        return target.call(this, args)
      }
    } else if (target instanceof RegExp) {
      // 如果是正则，则拷贝正则表达式
      dist = new RegExp(target.source, target.flags)
    } else if (target instanceof Date) {
      // 如果是日期，则拷贝日期
      dist = new Date(target)
    } else {
      dist = {}
    }
    // 将属性和拷贝后的值作为一个map
    cache.set(target, dist)

    for (let key in target) {
      // 过滤掉原型上的属性
      if (target.hasOwnProperty(key)) {
        dist[key] = cloneDeep(target[key], cache)
      }
    }
    return dist
  } else {
    return target
  }
}
