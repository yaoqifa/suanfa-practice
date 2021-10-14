/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heep = nums.sort((a, b) => b -a).slice(0, k)
  this.k = k
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heep.length < this.k) {
    this.heep.push(val)
    this.heep = this.heep.sort((a, b) => b -a)
  } else {
    for (let i = 0; i < this.k; i++) {
      if (this.heep[i] < val) {
        this.heep.splice(i, 0, val)
        this.heep.pop()
        break
      }
    }
  }
  return this.heep[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

