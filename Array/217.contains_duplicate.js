function containsDuplicate(nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = true;
    }
  }
  return false;
}
