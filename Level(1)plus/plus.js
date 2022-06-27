
function solution(numbers) {
  let answer = 0;
  let num = [];
  makeNum(num);
  checkNum(num, numbers);
  answer = calcNum(num, answer);
  return answer;
}
function calcNum(num, answer) {
  let ans = answer;
  num.forEach(el => {
    el[1] == 0 ? ans+=el[0] : ans
  });
  return ans;
}
function checkNum(num, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j][0] == numbers[i]) {
        num[j][1] += 1;
        break;
      } else continue;
    }
  }
}
function makeNum(num) {
  for (let i = 0; i < 10; i++) {
    num.push([i,0]);
  }
}
