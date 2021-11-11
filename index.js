let f_inp = document.getElementById("f_inp");
let s_inp = document.getElementById("s_inp");
let result = document.getElementById("res");
let list = document.getElementById("list");
const calculator = () => {
    result.style.display='inline-block'
  let mark = list.value;

    if (mark === "+") {
      result.innerHTML =  parseInt(f_inp.value) +  parseInt(s_inp.value);
    } else if (mark === "-") {
      result.innerHTML = parseInt(f_inp.value) -  parseInt(s_inp.value);
    } else if (mark === "*") {
      result.innerHTML =  parseInt(f_inp.value) *  parseInt(s_inp.value);
    } else if (mark === "/") {
      result.innerHTML =  parseInt(f_inp.value) /  parseInt(s_inp.value);
    }
  }

