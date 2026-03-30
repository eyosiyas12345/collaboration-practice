const variable = 1;

function minus (a,b){
  let c = a-b;
  console.log(c);
}
function display(){
  console.log(variable);
}

module.exports.variable = variable;
module.exports.minus = minus;
module.exports.display = display;
// console.log(module);