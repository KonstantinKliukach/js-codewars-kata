/*
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

  Return the running sum of nums.

  

  Example 1:

  Input: nums = [1,2,3,4]
  Output: [1,3,6,10]
  Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
  Example 2:

  Input: nums = [1,1,1,1,1]
  Output: [1,2,3,4,5]
  Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
  Example 3:

  Input: nums = [3,1,2,10,1]
  Output: [3,4,6,16,17]
*/

function runningSum(nums: number[]): number[] {
  return nums.reduce((result, currentValue, index, array) => {
      result.push(array.slice(0, index + 1).reduce((sum, currentNum) => sum + currentNum, 0))
    return result;
  }, []);
};

function runningSum2(nums: number[]): number[] {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] += nums[i - 1];
  }
  return nums;
};