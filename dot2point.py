result = []

with open('dot_world_map.txt') as dot_map:
    for i, line in enumerate(dot_map):
        for j, char in enumerate(line):
            if char in ['a', 's', 'e', '*', '-', 'o']:
                result.append([(j+1)*16+10, i*16+10, char])
print(result)
