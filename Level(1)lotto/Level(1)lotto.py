def rank(correct):
    if correct == 6:
        rank = 1
    elif correct == 5:
        rank = 2
    elif correct == 4:
        rank = 3
    elif correct == 3:
        rank = 4
    elif correct == 2:
        rank = 5
    else:
        rank = 6

    return rank

def solution(lottos, win_nums):
    answer = []
    correct_count = 0    
    zero_count = 0
    for i in range(len(win_nums)):
        if lottos[i] == 0:
            zero_count += 1
        else:
            if lottos[i] in win_nums:
                correct_count += 1

    low = correct_count
    high = correct_count + zero_count

    low_rank = rank(low)
    high_rank = rank(high)

    answer.append(high_rank)
    answer.append(low_rank)

    return answer
