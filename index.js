//Here are three possible JavaScript solutions to find the single element in a sorted array:


function singleNonDuplicate(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 == 1) mid--;
    if (nums[mid] !== nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }
  console.log(nums[left])
  return nums[left];
}

singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);

