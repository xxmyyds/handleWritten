class EventHub {
  private cache: any = {}
  on(eventName: any, fn: any) {
    this.cache[eventName] = this.cache[eventName] || []

    this.cache[eventName].push(fn)
  }
  emit(eventName: any, ...data: any) {
    ;(this.cache[eventName] || []).forEach((fn: any) => fn(...data))
  }
  off(eventName: any, fn: any) {
    this.cache[eventName] = this.cache[eventName] || []

    this.cache[eventName].indexOf(fn) > -1 &&
      this.cache[eventName].splice(this.cache[eventName].indexOf(fn), 1)
  }
}
export default EventHub
