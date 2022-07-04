#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

char* solution(int n) {
    // 리턴할 값은 메모리를 동적 할당해주세요.
    char *add1 = "수";
    char *add2 = "박";
    int len = strlen(add1);
    char *answer = (char*)malloc(n*len);
    for(int i=0; i<n; i++) {
        strcpy(&answer[i*len], i%2==0 ? add1 : add2);
    }

    return answer;
}
