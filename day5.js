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

--- Part Two ---

Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

Now, a nice string is one with all of the following properties:

It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
For example:

qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
How many strings are nice under these new rules?

new rules
  contains two identical substrings of two chars but not overlapping
  contains substr of length 3 that is a palindrome
  aaa
*/

var niceStringCountPt2 = function(input){
  var niceCount = 0;
  var strings = input.split(',');

  var substrPair = function(str){
    // for loop - iterate thru all substr's of length 2
      // if substr exists in obj and begins gt 1 behind the current substr
        // return true
      // add substrings to an obj for checking later{substr: current index}
    // return false
    var foo = {};
    for (var i = 0; i < str.length - 1; i++) {
      if(foo[str[i] + str[i + 1]] !== undefined &&
         foo[str[i] + str[i + 1]] < i - 1){
        return true;
      }
      // add substr to obj only if substr is not in obj already
      if(foo[str[i] + str[i + 1]] === undefined){  
        foo[str[i] + str[i + 1]] = i;
      }
    }
    return false;
  };
  
  var palinLength3 = function(str){
    for (var i = 0; i < str.length - 2; i++) {
      var sub = str.substr(i,3);
      if(sub[0] === sub[2]){
        return true;
      }
    }
    return false;
  };

  // checks if str is nice
  var niceCheck = function(str){
    // if(gt2vowels(str) && gt0doubles(str) && noForbidden(str)) {
    if(substrPair(str) && palinLength3(str)) {
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



















