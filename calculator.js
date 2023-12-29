//Module, Export, Import
// const add = (a, b) => {
//     return a + b;
// }
// const substract = (a, b) => {
//     return a - b;
// }
// module.exports = {
//     add,
//     substract,
// }                            Node.js


// const add = (a, b) => {
//   return a + b;
// };
// const substract = (a, b) => {
//   return a - b;
// };
// export { add, substract };    - Варіант запису 1


export const add = (a, b) => {
    return a + b;
  };
  export const substract = (a, b) => {
    return a - b;
  };
  
  
  // const math = {
  //   add: (a, b) => {
  //     return a + b;
  //   },
  //   substract: (a, b) => {
  //     return a - b;
  //   },
  // };
  
  // export default math;


export const addition = (a, b) => {
    return a + b;
}

export const substraction = (a, b) => {
    return a - b;
}

export const multiplication = (a, b) => {
    return a * b;
}

export const division = (a, b) => {
    return a / b;
}