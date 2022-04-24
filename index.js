// Code your solutions in this file
function writeCards(arr,name) {
    let newArr = [];
    for (let i =0;i < arr.length;i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
    }
    return newArr;
}
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}