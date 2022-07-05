def solution(a, b):
    iter = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    result = 0
    if a == 1 and b > 8:
        result = b%7
    elif a == 1 and b < 8:
        result = b
    else:
        for m in range(1, a):
            if m < 8:
                if m%2==0:
                    result += 30
                else:
                    result += 31
            else:
                if m%2==0:
                    result += 31
                else:
                    result += 30
            if m == 2:
                result = result - 30 + 29
            # if m == 8:
            #     result = result - 30 + 31
            print m, result
        result += b
        print result
    return iter[result%7 - 1]
