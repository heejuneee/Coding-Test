#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int month[12] = { 31,29,31,30,31,30,31,31,30,31,30,31 };
const char * dates[][7] = { {"SUN"},{"MON"},{"TUE"},{"WED"},{"THU"},{"FRI"},{"SAT"} };

char* solution(int a, int b) {

    int date = 0;
    int day;
    for (int i = 0; i < a - 1; i++)
    {
        date += month[i];
    }
    date += b;

    day = (date % 7 + 4) % 7;


    // 리턴할 값은 메모리를 동적 할당해주세요.
    char* answer = (char*)malloc(3 * sizeof(char));
    strcpy(answer, dates[day][0]);
    return answer;
}
