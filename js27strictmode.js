//Strict Mode

// "use strict";
// let myVariable;
// mVariable = 17;


function f() {"use strict"; return this;}
console.log(f());

function noStrict() {
    let aaa;
    aa = 123;
    console.log(aaa);
    console.log(aa);
  }
  noStrict();
  
  
  function strict() {
    "use strict";
    let bbb;
    bb = 321;
    console.log(bbb);
    console.log(bb);
  }
  strict();