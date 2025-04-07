length = 0
words = 0
vowels = 0
in_word = False

print("Enter a sentence ending with a period ('.'):")

while True:
    c = input("Enter a character: ")

    # Count the character
    length += 1

    # Count vowels
    if c.lower() in 'aeiou':
        vowels += 1

    # Count words
    if c == ' ':
        in_word = False
    elif not in_word and c != '.':
        words += 1
        in_word = True

    # Stop at period
    if c == '.':
        break

# Display results
print("Length of sentence:", length)
print("Number of words:", words)
print("Number of vowels:", vowels)
