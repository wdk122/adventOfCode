/*
--- Day 7: Some Assembly Required ---

This year, Santa brought little Bobby Tables a set of wires and bitwise logic gates! Unfortunately, little Bobby is a little under the recommended age range, and he needs help assembling the circuit.

Each wire has an identifier (some lowercase letters) and can carry a 16-bit signal (a number from 0 to 65535). A signal is provided to each wire by a gate, another wire, or some specific value. Each wire can only get a signal from one source, but can provide its signal to multiple destinations. A gate provides no signal until all of its inputs have a signal.

The included instructions booklet describes how to connect the parts together: x AND y -> z means to connect wires x and y to an AND gate, and then connect its output to wire z.

For example:

123 -> x means that the signal 123 is provided to wire x.
x AND y -> z means that the bitwise AND of wire x and wire y is provided to wire z.
p LSHIFT 2 -> q means that the value from wire p is left-shifted by 2 and then provided to wire q.
NOT e -> f means that the bitwise complement of the value from wire e is provided to wire f.
Other possible gates include OR (bitwise OR) and RSHIFT (right-shift). If, for some reason, you'd like to emulate the circuit instead, almost all programming languages (for example, C, JavaScript, or Python) provide operators for these gates.

For example, here is a simple circuit:

123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i
After it is run, these are the signals on the wires:

d: 72
e: 507
f: 492
g: 114
h: 65412
i: 65079
x: 123
y: 456
In little Bobby's kit's instructions booklet (provided as your puzzle input), what signal is ultimately provided to wire a?
*/


var signals = function(input){
  var results = {};
  input = input.split(';');
  input.forEach(function(x){
    x = x.split(' ');
    if (x[0] === 'NOT') {
      console.log('NOT');
      results[x[3]] = _.memoize(function(){
        return (~ this[x[1]]()) + 65536;
      });
    }
    if (x[1] === 'AND') {
      if(x[0] % 1 !== 0){
        console.log('AND x0 is ref');
        results[x[4]] = _.memoize(function(){
                  console.log('inside and x0 ref');
                  return this[x[0]]() & this[x[2]]();
                });
      } else if(x[0] % 1 === 0){
        console.log('AND x0 is int');
        results[x[4]] = _.memoize(function(){
                  console.log('inside and x0 int');
                  return (x[0] * 1) & this[x[2]]();
                });
      }
    }
    if (x[1] === 'OR') {
      console.log('OR');
      results[x[4]] = _.memoize(function(){
              console.log('inside or');
              return this[x[0]]() | this[x[2]]();
            });
    }
    if (x[1] === 'RSHIFT') {
      console.log('RS');
      results[x[4]] = function(){
        console.log('inside rs');
        return this[x[0]]() >> x[2];
      };
    }
    if (x[1] === 'LSHIFT') {
      console.log('LS');
      results[x[4]] = function(){
        console.log('inside ls');
        return this[x[0]]() << x[2];
      }; 
    }
    if (x[1] === '->') {
      if(x[0] % 1 === 0){ 
        console.log('direct int asmnt');
        results[x[2]] = function(){
          console.log('inside dia');
          return x[0] * 1;
        };
      } else { // if x[0] is reference
        console.log('direct ref asmnt');
        results[x[2]] = function(){
          console.log('inside dra');
          return this[x[0]]();
        };
      }
    }
  });
  // return obj that has the signals
  return results;
};