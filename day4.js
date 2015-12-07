/*
--- Day 4: The Ideal Stocking Stuffer ---

Santa needs help mining some AdventCoins.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.

If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....
Your puzzle input is bgvyzdsv.


given
  puzzle input
find
  the lowest number that the input combines with to make an MD5 hash starting with five zeroes
  
*/
var findHash = function(key){
  // md5 function from https://github.com/blueimp/JavaScript-MD5
  var md5 = require("./md5").md5;
  var i = 1;
  while(md5(key + i).substr(0,5) !== '00000'){
    i++;
  }
  return i;
};

/////// part 2
var findHash = function(key){
  // md5 function from https://github.com/blueimp/JavaScript-MD5
  var md5 = require("./md5").md5;
  var i = 1;
  while(md5(key + i).substr(0,6) !== '000000'){
    i++;
  }
  return i;
};