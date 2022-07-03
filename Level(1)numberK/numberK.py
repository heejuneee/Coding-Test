def solution(array, commands):
    answer = []

    command_len = len(commands)

    for idx in range(command_len):
        i=commands[idx][0]
        j=commands[idx][1]
        k=commands[idx][2]
        #i=i
        #j=j-1
        k=k-1
        tmp_arr = list()
        for idx_2 in range(i-1,j):
            tmp_arr.append(array[idx_2])
        tmp_arr=sorted(tmp_arr)
        answer.append(tmp_arr[k])
    return answer
