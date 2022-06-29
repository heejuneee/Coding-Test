#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int arr1[46];
int arr2[7]={6,6,5,4,3,2,1};

// lottos_len은 배열 lottos의 길이입니다.
// win_nums_len은 배열 win_nums의 길이입니다.
int* solution(int lottos[], size_t lottos_len, int win_nums[], size_t win_nums_len) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc(1);
    int min=0,max=0;

    for(int i=0;i<lottos_len;i++){
        arr1[lottos[i]]++;
    }

    for(int i=0;i<win_nums_len;i++){
        if(arr1[win_nums[i]])
            min++;
    }

    max=min+arr1[0];

    answer[0]=arr2[max];
    answer[1]=arr2[min];

    return answer;
}
