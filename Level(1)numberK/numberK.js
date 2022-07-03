
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
function solution(array, commands) {
    var answer = [];

    for(var i =0; i<commands.length; i++){
        var temp = array.slice(commands[i][0] - 1,commands[i][1]);
        temp = quickSort(temp);
        var ans = temp.length != 1?temp[commands[i][2] - 1]:temp[0];
        answer.push(ans);
    }
    return answer;
}


function quickSort (array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = [array[0]];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            pivot.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
