def solution(nums):
    kind = []
    answer = int(len(nums)/2) # 3
    for num in nums:
        if num not in kind:
            kind.append(num)
    result = len(kind) if answer > len(kind) else answer 
    return result
