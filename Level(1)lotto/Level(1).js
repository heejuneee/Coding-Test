
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
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
function solution(lottos, win_nums) {
    let answer = [];
    let max = 0;
    let min = 0;

    for (let lotto of lottos) {
        if (win_nums.includes(lotto)) {
            min++;
        }
        if (lotto === 0) {
            max++;
        }
    }

    switch (min + max) {
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }

    switch (min) {
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2);
            break;
        case 4:
            answer.push(3);
            break;
        case 3:
            answer.push(4);
            break;
        case 2:
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }

    return answer;
}
