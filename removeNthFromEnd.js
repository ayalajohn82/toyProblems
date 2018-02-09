/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let prevs = {};
  let current = head;
  while(current !== null) {
    for(let i = 0; i <= n; i++) {
      if(current === null) {
        prevs[1].next = prevs[n];
        prevs[n].next = prevs[i-1];
        prevs[i-1].next = null;
        console.log(prevs);
        return head;
      } else {
        prevs[i] = current;
        current = current.next;
      }
    }
    prev = {};
  }
};

//  1->2->3->4->5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const result = removeNthFromEnd(head, 4);
console.log(result);