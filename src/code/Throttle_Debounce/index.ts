export const throttle = (fn: any, delay: any) => {
  let last = 0 //上一次调用时间
  return (...args: any[]) => {
    //   一段时间内只有第一次被调用，
    const now = Date.now()
    if (now > last + delay) {
      fn.apply(this, args)
      last = now
    }
  }
}
export const debounce = (fn: any, delay: any) => {
  let timer: any
  return (...args: any[]) => {
    //   定时器
    // 短时间内多次调用以最后一次为准
    // 一次调用后，delay之后不再调用，我才会调用这次调用
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
