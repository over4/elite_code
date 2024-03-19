const code = {
code:`//we can apply a similar approach to the min of a rotated array problem
//we can apply the logic that if nums[half]>=nums[left] then we can understand
//what values are on each side, we know that there will be larger numbers on the left
//of half and smaller numbers on the left, so we can compare this to the targe to 
//adjust the pointers accordingly


var search = function(nums, target) {
    let left = 0, right = nums.length-1
    let res

    while(left<=right){
        //compute the midpint
        let mid = Math.floor((left+right)/2)

        //check if we found the right value
        if(nums[mid] === target){
            return mid
        }

        //check what section of the array we are in
        if(nums[mid]>= nums[left]){
            if(target>nums[mid] || target < nums[left]){
                //target is larger than current value but left side is smaller
                //so search right
                left = mid + 1
            }else{
                right = mid - 1
            }
        }else{
            if(target<nums[mid] || target > nums[right]){
                //target is less and therefore we need to look for smaller numbers
                //or target is large than numbers on the right which also means
                //we need to move to smaller numbers
                right = mid - 1
            }else {
                left = mid + 1
            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2],0))//4
console.log(search([4,5,6,7,0,1,2],3))//-1
console.log(search([1],0))//-1}
`,
explanation:"explain this eqweqweqweqwe",
link:"https://www.youtube.com/embed/U2SozAs9RzA?si=1WJXeM1owcnklzDE"
};
export default code