const sumAll = function(min, max) {
    let temp = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    if (min > max) {
        temp = min; //temp now has value min no more
        min = max; //min now has the value of max
        max = temp;
    }
let sum = 0;
for (let i = min; i <= max; i++) {
    sum += i;   
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
