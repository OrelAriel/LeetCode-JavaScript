/** 
 * Given an array of integers,
 * find if the array contains any duplicates.
 * Your function should return true 
 * if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * /

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) =>{
    if (nums.length === 0 || nums.length === 1) return false
    let numbers = new Set();
    for (let num of nums){
        if (!numbers.has(num)) numbers.add(num);
        else return true
    }
    return false
};