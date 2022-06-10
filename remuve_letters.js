function remuve_letters(string, num) {
    part1 = string.substring(0, num)
    part2 = string.substring(num + 1, string.length)
    return part1 + part2
}