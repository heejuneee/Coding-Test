
def solution(new_id):
    answer = ''
    min = 3
    max = 15
    #1단계
    new_id = new_id.lower()
    re_id = ''
    #2단계
    for i in new_id:
        #isalnum()- 문자열에 숫자 또는 알파벳이 있을 경우 True 반환
        if i.isalnum():
            re_id+=i
        elif i=='-':
            re_id+=i
        elif  i=='_':
            re_id+=i
        elif  i=='.':
            re_id+=i
    #3단계
    #문자열 치환 함수 replace 사용
    while(True):
        if '..' in re_id:
                re_id=re_id.replace('..','.')
        else: 
            break
    #4단계
    #문자열 앞 뒤에 '.' 제거 
    re_id=re_id.strip('.')
    #5단계
    if re_id == "":
        for i in range(min):
            re_id+='a'
    #6단계
    else:
        if len(re_id) > max:
            re_id=re_id[0:max]
            if re_id[max-1] == '.':
                re_id=re_id.rstrip('.')
        elif len(re_id) < min:
            for i in range(min-len(re_id)):
                re_id+=re_id[-1]
    answer = re_id
    return answer
