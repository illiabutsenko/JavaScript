function factorial(a) {
    return (a != 1) ? a * factorial(a - 1) : 1;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));


//WeakSet, WeakMap
CreateLargeObject = () => {
  let largeObject = {};
  return largeObject;
};

let creationTimeMap = new Map();

let ObjA = CreateLargeObject();
creationTimeMap.set(ObjA, Date.now());

let ObjB = CreateLargeObject();
creationTimeMap.set(ObjB, Date.now());

ObjA = null;
console.log(creationTimeMap);

let creationTimeWeakMap = new WeakMap();

let ObjC = CreateLargeObject();
creationTimeWeakMap.set(ObjC, Date.now());

let ObjD = CreateLargeObject();
creationTimeWeakMap.set(ObjD, Date.now());

ObjC = null;
console.log(creationTimeWeakMap);

const trackObjectWithWeakMap = () => {
    let person = {
        name: "Danny",
        age: 25,
    }
    let Time = new WeakMap();
    return Time.set(person, Date.now());
};

console.log(trackObjectWithWeakMap());