// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.

// Exapmple
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let med1, med2;

    if (nums1.length === 1) {
      med1 = nums1[0];
    } else if(nums1.length % 2 === 0) {
      med1 = (nums1[nums1.length/2] + nums1[nums1.length/2 -1]) /2;
    } else {
      med1 = nums1[Math.floor(nums1.length/2)];
    }

    if (nums2.length === 1) {
      med2 = nums2[0];
    } else if(nums2.length % 2 === 0) {
      med2 = (nums2[nums2.length/2] + nums2[nums2.length/2 -1]) /2;
    } else {
      med2 = nums2[Math.floor(nums2.length/2)];
    }
    console.log(nums1.length);
    if(nums1.length === 0) {
      console.log(med2);
      return med2;
    } else if(nums2.length === 0) {
      return med1;
    } else {
      return (med1 + med2) / 2; 
    }
};

const result = findMedianSortedArrays([], [1,2,3,4,5]);

console.log(result);