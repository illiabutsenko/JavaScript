let pattern1 = /Hello/;
let pattern2 = new RegExp("pattern");

let text = "Hello World";
let isMatch = pattern1.test(text);

console.log(isMatch);

let matches = text.match(pattern1);
console.log(matches);

pattern1 = /o/g;
matches = text.match(pattern1);
console.log(matches);

pattern1 = /hello/i;
matches = text.match(pattern1);
console.log(matches);

pattern1 = /o/mg;
let text2 = `Hello 1 World
room book desk 4`;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\d/mgi;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\w/mgi;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\s/mgi;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /[aeiouy]/mgi;
text2 = `Hello 1 fixed:
room book desk 4 every`;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\d{3}-\d{2}-\d{4}/mgi;
text2 = `Hello 1 World: 333-45-2345
room book desk 4`;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\d{4}-\d{2}-\d{2}/mgi;
text2 = `Hello 1 World: 333-45-2345
room book desk 4 2000-05-12`;
matches = text2.match(pattern1);
console.log(matches);

pattern1 = /\d+/mgi;
text2 = `Hello 1 World: 333-45-2345
room book desk 4 2000-05-12`;
matches = text2.match(pattern1);
console.log(matches);