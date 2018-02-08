// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(9);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const length = Math.max(l1.length, l2.length);
  let totals = [];
  let curr1 = l1;
  let curr2 = l2;
  while(curr1 !== null && curr2 !== null) {
    totals.push(curr1.val + curr2.val);
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  console.log('curr1', curr1);
  console.log('curr2', curr2);

  if(curr1 !== null) {
    while(curr1 !== null) {
      totals.push(curr1.val);
      curr1 = curr1.next;
    }
  } else if(curr2 !== null){
    while(curr2 !== null) {
      totals.push(curr2.val);
      curr2 = curr2.next;
    }
  }
  for(let i = 0; i < totals.length; i++) {
    if(totals[i] > 9) {
      var temp = totals[i];
      totals[i] %= 10;
      if(i + 1 < totals.length) {
        totals[i + 1] += (temp - totals[i]) / 10;
      } else {
        totals.push((temp - totals[i]) / 10);
      }
    }
  }
  return Number(totals.join(''));
};

const result = addTwoNumbers(list1, list2);

const assertEqual = (expected, actual) => {
  if(expected === actual) {
    console.log('Test Passed!');
  } else {
    console.log('FAILED: Expected ' + expected + ' but got ' + actual);
  }
}

console.log('Result: ', result);

assertEqual(807, result)


