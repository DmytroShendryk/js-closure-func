function getAdder () {
    let res = 0;
    return function (x){
        res += x;
        return res;
    }
}
let sum = getAdder();
console.log(sum(3));//3
console.log(sum(5));//8
console.log(sum(20));//28