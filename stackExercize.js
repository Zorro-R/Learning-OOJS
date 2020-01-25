_count = new WeakMap();
_elements = new WeakMap();

class Stack {
  constructor() {
    _count.set(this, 0);
    _elements.set(this, []);
  }

  get count() {
    return _count.get(this);
  }

  push(element) {
    _elements.get(this).push(element);
    currentCount = _count.get(this);
    _count.set(this, currentCount + 1);
  }

  pop() {
    length = _count.get(this);
    if (length <= 0) {
      throw new Error("No elements in stack.");
    }
    element = _elements.get(this)[length - 1];
    _elements.get(this)(length - 1, 1);
    return element;
  }

  peek() {
    length = _count.get(this);
    if (length <= 0) {
      throw new Error("No elements in stack.");
    }
    return _elements.get(this)[length - 1];
  }
}

const stack = new Stack();
