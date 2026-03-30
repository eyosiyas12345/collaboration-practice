
const variable = 2;
 function sum (a,b){
  let c = a+b;
  console.log(c);
}
 function display(){
  console.log(variable);
}

module.exports.variable = variable;
module.exports.sum = sum;
module.exports.display = display;
// console.log(module);

// export default variable, sum, display;