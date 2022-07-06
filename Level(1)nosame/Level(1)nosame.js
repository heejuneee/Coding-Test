function solution(arr)
{
    var answer = [];

    
    console.log(arr)
    var x = arr[0];
    var j = 0;
    var i = 1;
    while(true){
        if(i == arr.length+1){
            break;
        }
        if(x == arr[i]){             
        }else{
            answer[j] = x;
            j++;
            x = arr[i];
        }
        i++;
    } 
    return answer;
}
