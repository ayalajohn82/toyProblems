// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. 
// When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?


// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
const Node = (value) => {
  return {
    value,
    next: null,
    prev: null,
  }
};

class List {
  constructor(init) {
    this._head = Node(init);
    this._tail = this._head;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  removeHead() {
    let temp = this._head;
    this._head = this._head.next;
    temp.next = null;
  }

  insert(value) {
    this._tail.next =  Node(value);
    this._tail = this._tail.next;
  }
}

class LRU {
  constructor(capacity, val) {
    this._capacity = capacity;
    this._cacheValues = new List(val);
    this._cache[val] = this._cacheValues;
  }

  getCache() {
    return this._cache;
  }

  getCapacity() {
    return this._capacity;
  }

  put(key, value) {
    if(this._cache.length <= this.getCapacity()) {
      this._cache[key] = value;
    } else {

    }
  }

  get() {
    
  }
}