//test 1
function getLevel2(n) {
  let level = []
  let level2 = 0
  for (let index = 1; index < n + 1; index++) {
    level2 = 2 ** index
    level.push(level2)
  }
  console.log(level);
}


getLevel2(5)

//test 2
let n = 5;
let A = 2;
let B = 3;
let arr = [A, B]
let c = A + B

for (let i = 2; i < n; i++) {
  arr.push(c)
  c += arr[i]
}

console.log(arr);

//test 3
let N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

N.reverse();
console.log(N);

//test 4
let numb = [4, 5, 7, 8, 6, 9]
let toq = []

for (let i = 0; i < numb.length; i++) {
  if (numb[i] % 2 !== 0) {
    toq.push(numb[i]);
  }
}

console.log(toq.length);

//test 5
let toqSon = []
let juftSon = []

for (let i = 0; i < numb.length; i++) {
  if (numb[i] % 2 !== 0) {
    toqSon.push(numb[i]);
  }
  if (numb[i] % 2 == 0) {
    juftSon.push(numb[i]);
  }
}
let result = juftSon.concat(toqSon.reverse())
console.log(result);

//test 6
const ar = [1, 2, 3, 4, 5, 6, 7, 8];
const m = arr.length;

for (let i = 0; i < m; i += 2) {
  console.log(ar[i]);
}

//test 7
const arrs = [1, 3, 5, 7, 9, 11, 13, 15];
const M = arrs.length;

for (let i = M - 1; i >= 1; i -= 2) {
  console.log(arrs[i]);
}

//test 8
let t = [];
let j = [];
let javob = []

for (let i = 0; i < m; i += 2) {
  t.push(ar[i]);
}

for (let i = 0; i < ar.length; i++) {
  let isEven = true;
  let num = ar[i];
  while (num > 1) {
    num -= 2;
  }
  if (num === 1) {
    isEven = false;
  }
  if (isEven) {
    j.push(ar[i]);
  }
}

javob = t.concat(j)

console.log(javob);

//test 9
const nums = [2, 4, 6, 8];
const length = nums.length;
const even = [];
const odd = [];

for (const key in nums) {
  if (key % 2 === 0) {
    even.push(key);
  } else {
    odd.push(key);
  }
}


const results = odd.concat(even);
console.log(results);

//test 12
const arrS = [10, false, "", "Abdulaziz", null];

const truthyArr = [];
const falsyArr = [];

for (let i = 0; i < arrS.length; i++) {
  if (arrS[i]) {
    truthyArr.push(arrS[i]);
  } else {
    falsyArr.push(arrS[i]);
  }
}

console.log("Truthy:", truthyArr);
console.log("Falsy:", falsyArr);

//test 13
function getOddMin(arr) {
  let min = null;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 !== 0) {
      if (min === null || arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min;
}

const arS = [1, 4, 2, 3, 7, 6, 5, 8];
const oddMin = getOddMin(arS);
console.log(oddMin);

//test 14
function getEvenMax(numBers) {
  let max = null;
  for (let i = 1; i < numBers.length; i += 2) {
    if (numBers[i] !== null && (max === null || numBers[i] > max)) {
      max = numBers[i];
    }
  }
  return max;
}

const numBers = [3, null, 9, 2, 4, null, 8, 1, 5, 7];
const evenMax = getEvenMax(numBers);
console.log(evenMax);

//test 16
function findClosestToR(arr, R) {
  let closest = arr[0];
  let minDiff = Math.abs(R - arr[0])
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(R - arr[i]);
    if (diff < minDiff) {
      closest = arr[i];
      minDiff = diff;
    }
  }
  return closest;
}

const aRr = [1, 3, 5, 7, 9];
const R = 6;
const closestToR = findClosestToR(aRr, R);
console.log(closestToR);

//test 17
function findLargestSumPair(arr) {
  let largestSumPair = [arr[0], arr[1]];
  let largestSum = arr[0] + arr[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum > largestSum) {
        largestSumPair = [arr[i], arr[j]];
        largestSum = sum;
      }
    }
  }
  return largestSumPair;
}

const masiv = [1, 3, 5, 7, 9];
const largestSumPair = findLargestSumPair(masiv);
console.log(largestSumPair);

//test 18
function findDuplicateElements(arr) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        indices.push(i);
        indices.push(j);
        return indices;
      }
    }
  }
  return indices;
}

const masiV = [1, 3, 5, 7, 3, 9];
const duplicateIndices = findDuplicateElements(masiV);
console.log(duplicateIndices);


//test 19
function findMostFrequentElement(arr) {
  let mostFrequentElement = arr[0];
  let maxFrequency = 1;
  for (let i = 0; i < arr.length; i++) {
    let frequency = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        frequency++;
      }
    }
    if (frequency > maxFrequency) {
      mostFrequentElement = arr[i];
      maxFrequency = frequency;
    }
  }
  return { element: mostFrequentElement, frequency: maxFrequency };
}

const maSiv = [1, 3, 5, 7, 3, 9];
const mostFrequent = findMostFrequentElement(maSiv);
console.log(mostFrequent);

//test 20
function createEvenArray(a) {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      b.push(a[i]);
    }
  }
  return {
    length: b.length,
    elements: b
  };
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = createEvenArray(a);
console.log(b.length);
console.log(b.elements);

//test 21
let butun = [1, 2, 3, 4, 5, 6, 7, 8]
let k = 2
let res = []

for (const iterator of butun) {
  res.push(iterator + k)
}
console.log(res);

//test 22
function swapArrayHalves(arr) {
  const half = arr.length / 2;
  for (let i = 0; i < half; i++) {
    const temp = arr[i];
    arr[i] = arr[half + i];
    arr[half + i] = temp;
  }
  return arr;
}

const son = [1, 2, 3, 4, 5, 6];
const resul = swapArrayHalves(son);
console.log(resul);

//test 26
function deleteElementWithIndex(arr, k) {
  if (k < 0 || k >= arr.length) {
    return arr;
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== k) {
      result.push(arr[i]);
    }
  }
  return result;
}

const sonlar = [1, 2, 3, 4, 5];
const K = 2;
const resultS = deleteElementWithIndex(sonlar, K);
console.log(resultS);
