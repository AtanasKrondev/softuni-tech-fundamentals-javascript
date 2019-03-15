Array.prototype.poop = function () {
    let lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
}

let arr = [1, 2, 3];
let number = arr.poop();
console.log(arr);
console.log(number);
