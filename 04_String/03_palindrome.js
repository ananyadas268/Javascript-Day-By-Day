function isPalindrome(str){
    let clean=str.toLowerCase().trim();
    let reverse=clean.split("").reverse().join("");
    return clean===reverse;
}
console.log(isPalindrome("madam"));