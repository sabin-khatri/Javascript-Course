const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]
const myName = 'Sabin'
const joinedArray = [...nums1, ...nums2,11,12,13]
const user={
    name:'Sabin',
 age: 20,
}
function add(){
    console.log(arguments);
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum = sum+arguments[i];
    }
    return sum;

}
console.log(joinedArray);
console.log(user.name);
console.log(user.age);
console.log(add(1,2,3))