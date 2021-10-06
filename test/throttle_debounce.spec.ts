import { throttle, debounce } from '../src/code/Throttle_Debounce'

it('防抖', (done) => {
  const mockFn = jest.fn()
  // 10ms之内，无论调用多少次 mockFn，只执行最后一次调用
  const fn = debounce(mockFn, 10)

  fn(1)
  fn(2)

  //   断言
  setTimeout(() => {
    const called = mockFn.mock.calls
    expect(called.length).toBe(1)
    expect(called[0][0]).toBe(2)
    done()
  }, 50)
})
it('节流', (done) => {
  const mockFn = jest.fn()
  // 10ms之内，无论调用多少次 mockFn，只执行第一次调用
  const fn = throttle(mockFn, 10)

  fn(1)
  fn(2)

  //   断言
  setTimeout(() => {
    const called = mockFn.mock.calls
    expect(called.length).toBe(1)
    expect(called[0][0]).toBe(1)
    done()
  }, 50)
})
