// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2. 

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let area = 1;
  let front = 0;
  let back = height.length -1;
  while(front < back) {
    area = Math.max(area, Math.min(height[front], height[back]) * (back - front));
    height[front] < height[back] ? front++ : back--;
  }
  return area;
};

const result = maxArea([1, 5, 4, 3]);

console.log(result);