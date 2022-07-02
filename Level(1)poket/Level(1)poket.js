function solution(nums) {
    var answer = 0;
    const total = nums.length;
    const bring = total / 2;
    const mon = [...new Set(nums)];

    if (bring == mon.length) answer = bring;
    if (bring > mon.length) answer = mon.length;
    if (bring < mon.length) answer = bring;
    return answer;
}
