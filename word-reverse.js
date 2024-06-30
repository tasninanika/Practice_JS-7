function reverseWords(string){
    const words = string.split(' ');
    const result = [];
    console.log(words);
    for(let i = words.length - 1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good girl';
console.log(reverseWords(myString));