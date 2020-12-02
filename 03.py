input = 'ab'
k = 3


def FindCombinations(input,k,prefix):
    if (k == 0):
        print(prefix)
        prefix = ""
        return
    
    for i in input:
        new_prefix = prefix + i
        FindCombinations(input,k-1,new_prefix)

print("All combinations for input >>>", input  , " & k=",k)
FindCombinations(input,k,"")