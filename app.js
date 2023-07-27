var n1Element = document.getElementById('n1');
var n2Element = document.getElementById('n2');
var buttonElement = document.querySelector('button');
//array full of numbers
// const numResults: number[] = [];
//OR
var numResults = [];
var textResults = [];
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + " " + n2;
    }
    return +n1 + +n2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = n1Element.value;
    var num2 = n2Element.value;
    var result = add(+num1, +num2);
    // telling TS that we know result variable is number
    numResults.push(result);
    var stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
