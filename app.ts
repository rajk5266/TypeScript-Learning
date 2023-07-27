const n1Element = document.getElementById('n1') as HTMLInputElement;
const n2Element = document.getElementById('n2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

//array full of numbers
// const numResults: number[] = [];
//OR
const numResults: Array<number> = []
const textResults: string[] = []

type NumOrString = number | string;
type Result =  { val: number; timestamp: Date }

interface ResultObj {
    val : number;
    timestamp: Date
}

function add(n1: NumOrString, n2: NumOrString) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + " " + n2
    }
    return +n1 + +n2
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val)
}

buttonElement.addEventListener('click', () => {
    const num1 = n1Element.value;
    const num2 = n2Element.value;
    const result = add(+num1, +num2)
    // telling TS that we know result variable is number
    numResults.push(result as number)

    const stringResult = add(num1, num2)
    textResults.push(stringResult as string)
    
    printResult({ val: result as number, timestamp: new Date() })
    console.log(numResults, textResults)
}) 

const myPromise = new Promise<string>((resolve , reject) => {
  setTimeout(() => {
    resolve('It worked')
  } ,1000)
})

myPromise.then((result) => {
    console.log(result.split('w'))
})