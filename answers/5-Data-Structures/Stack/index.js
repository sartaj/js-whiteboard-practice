class Stack {
  constructor() {
    this.stack = {}
    this.tail = -1
  }
  push(item) {
    this.tail++
    this.stack[this.tail] = item
  }
  pop() {
    if(this.isEmpty()) return undefined
    const tailContent = this.peek()
    delete this.peek()
    this.tail--
    return tailContent
  }
  peek() {
    return this.stack[this.tail]
  }
  isEmpty() {
    return this.tail === -1
  }
}

module.exports = Stack