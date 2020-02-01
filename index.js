function buildHistogram(lettersArray) {
    let result = {}
    for (const character of lettersArray) {
        if (result[character]) {
            result[character] = result[character] + 1
        } else {
            result[character] = 1
        }
    }
    return result
}

function canBuildNote(magLetters, note) {
    let noteLetters = note.split(' ').join().split('')
    const noteChars = buildHistogram(noteLetters)
    const magChars = buildHistogram(magLetters)
    for (let letter in noteChars) {
        if (noteChars[letter] > magChars[letter] || !magChars[letter])
            return false
    }
    return true
}

// let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// let note = "hereisat"

// console.log('Building example')
// canBuildNote(magazine, note)