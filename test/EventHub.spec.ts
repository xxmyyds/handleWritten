import EventHub from '../src/code/EventHub'

test('基本用法', () => {
  const eventHub1 = new EventHub()

  let called = false
  eventHub1.on('event1', (x: any) => {
    console.log(x)
    called = true
  })

  eventHub1.emit('event1', 'Hello EventHub!')

  expect(called).toBe(true)
})

test('多个参数传递', () => {
  const eventHub2 = new EventHub()

  let called = ''
  eventHub2.on('event2', (x: any, y: any) => {
    called = x + y
  })

  eventHub2.emit('event2', 'Hello ', 'EventHub!')

  expect(called).toBe('Hello EventHub!')
})

test('取消订阅', () => {
  const eventHub3 = new EventHub()

  let called = false
  const fn = () => {
    called = true
  }
  eventHub3.on('event3', fn)

  eventHub3.off('event3', fn)

  eventHub3.emit('event3')

  expect(called).toBe(false)
})
