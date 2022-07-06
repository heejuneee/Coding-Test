def no_continuous(s):
 
    list = []
    before = 0
    for i in s:
        if before == i:
            pass
        else:
            list.append(i)
        before = i
    return list


print( no_continuous( "133303" ))
