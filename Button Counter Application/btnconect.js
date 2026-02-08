/* ===== ELEMENTS ===== */
let btn1_incr = document.getElementById("btn1_incr");
let btn1_dec  = document.getElementById("btn1_dec");
let reset1 = document.getElementById("reset1");


let text_incr = document.getElementById("text_incr");
let text_dec  = document.getElementById("text_dec");

/* ===== COUNTER (CLOSURE) ===== */
function Counter(start) {
  let count = start;
  const MIN = 0;
  const MAX = 20;

  return {
    increment(id) {
      if (count < MAX) {
        count++;
        document.getElementById(id).innerText = count;
      }
    },
    decrement(id) {
      if (count > MIN) {
        count--;
        document.getElementById(id).innerText = count;
      }
    },
    reset(id) {
      count = 0;
      document.getElementById(id).innerText = count;
    }
  };
}

let res1 = Counter(0);


/* ===== UI TOGGLES ===== */
function activeIncrement() {
  text_incr.classList.add("text-blue-500", "shadow-yellow-500", "shadow-lg");
  text_dec.classList.remove("text-blue-500", "shadow-yellow-500", "shadow-lg");
  reset1.classList.remove("shadow-yellow-500","shadow-lg");
}

function activeDecrement() {
  text_dec.classList.add("text-blue-500", "shadow-yellow-500", "shadow-lg");
  text_incr.classList.remove("text-blue-500", "shadow-yellow-500", "shadow-lg");
  reset1.classList.remove("shadow-yellow-500","shadow-lg");
}
function reset() {
  
}

/* ===== EVENTS ===== */
// Counter 1
btn1_incr.onclick = () => { activeIncrement(); res1.increment("data1"); };
btn1_dec.onclick  = () => { activeDecrement(); res1.decrement("data1"); };
reset1.onclick    = () => {
  res1.reset("data1");
  reset1.classList.add("shadow-yellow-500","shadow-lg");
  text_incr.classList.remove("text-blue-500", "shadow-yellow-500", "shadow-lg");
   text_dec.classList.remove("text-blue-500", "shadow-yellow-500", "shadow-lg");
};
