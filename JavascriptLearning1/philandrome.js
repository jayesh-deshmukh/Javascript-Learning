// A palindrome is a string that contains the same order of letters forwards as backwards. For example, 'Borrow or rob?' is a palindrome, since the order of the letters from front to back is the same as back to front. Please write a method to determine if a given string is a palindrome, then test the following strings: 'A man, a plan, a canal: Panama.', 'Borrow or rob?', and 'This is not a palindrome!'

let str1 = 'A man, a plan, a canal: Panama.'; // -> true
let str2 = 'Borrow or rob?'; // -> true
let str3 = 'This is not a palindrome!'; // -> false

// /\W/g

function isPalindrome(str) {
  var cleanedStr = str.replace(/\W/g, '').toLowerCase(),
      reversedString = cleanedStr.split('').reverse().join('');

  if ( reversedString === cleanedStr ){
    return true;
  }else{
    return false;
  }
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
