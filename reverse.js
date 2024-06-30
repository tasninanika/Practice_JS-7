function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        reversed = reversed + text[i];
    }
    return reversed;
}

const myString = 'I am a good girl';
const reversed = reverseString(myString);
console.log('Reversed output: ',reversed);