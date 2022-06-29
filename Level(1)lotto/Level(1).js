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
