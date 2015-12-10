/*
--- Day 5: Doesn't He Have Intern-Elves For This? ---

Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice?

given
  rules that govern nice strings
    >= 3 vowels (aeiou)
    >= 1 double letter (bb)
    !contain any of (ab, cd, pq, xy)
  nice strings must follow all three rules
  input is newline separated string of strings
find
  quantity of nice strings in input
*/
var niceStringCount = function(input){
  var niceCount = 0;
  var strings = input.split(',');


  var gt2vowels = function(str){
    var vowelCount = 0;

    for (var i = 0; i < str.length; i++) {
      if(str[i] === 'a' || 
         str[i] === 'e' || 
         str[i] === 'i' || 
         str[i] === 'o' || 
         str[i] === 'u'){
           vowelCount ++;  
      }
    };

    if(vowelCount > 2){
      return true;
    } else {
      return false;
    }
  };

  var gt0doubles = function(str){
    for (var i = 0; i < str.length - 1; i++) {
      if(str[i] === str[i + 1]){
        return true;
      }
    }
    return false;
  };
  // (ab, cd, pq, xy)
  var noForbidden = function(str){
    for (var i = 0; i < str.length - 1; i++) {
      if(str[i] + str[i + 1] === 'ab' ||
         str[i] + str[i + 1] === 'cd' ||
         str[i] + str[i + 1] === 'pq' ||
         str[i] + str[i + 1] === 'xy'   ){
        return false;
      }
    }
    return true;  
  };
  // checks if str is nice
  var niceCheck = function(str){
    if(gt2vowels(str) && gt0doubles(str) && noForbidden(str)) {
      return true;
    } else {
      return false;
    }
  };
  for (var i = 0; i < strings.length; i++) {
    if (niceCheck(strings[i])){
      niceCount++;
    }
  }
  return niceCount;
};



/*
input:

*/



















