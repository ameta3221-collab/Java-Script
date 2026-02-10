  //counter = 0 ;
let countdata1 = document.getElementById("countdata1");
let countdata2 = document.getElementById("countdata2");
let countdata3 = document.getElementById("countdata3");
let countdata4 = document.getElementById("countdata4");
let countdata5 = document.getElementById("countdata5");
let countdata6 = document.getElementById("countdata6");
let countdata7 = document.getElementById("countdata7");
let countdata8 = document.getElementById("countdata8");
function Counter() {
  let count = 0;
  return function (countdata) {
    // console.log(count);
    countdata.innerText = count;
    return ++count;
  };
}
let res1 = Counter();
let res2 = Counter();
let res3 = Counter();
let res4 = Counter();
let res5 = Counter();
let res6 = Counter();
let res7 = Counter();
let res8 = Counter();


let counterbtn1 = document.getElementById("counterbtn1");
let counterbtn2 = document.getElementById("counterbtn2");
let counterbtn3 = document.getElementById("counterbtn3");
let counterbtn4 = document.getElementById("counterbtn4");
let counterbtn5 = document.getElementById("counterbtn5");
let counterbtn6 = document.getElementById("counterbtn6");
let counterbtn7 = document.getElementById("counterbtn7");
let counterbtn8 = document.getElementById("counterbtn8");


counterbtn1.addEventListener("click", () => {
  res1(countdata1);
});
counterbtn2.addEventListener("click", () => {
  res2(countdata2);
});
counterbtn3.addEventListener("click", () => {
  res3(countdata3);
});
counterbtn4.addEventListener("click", () => {
  res4(countdata4);
});
counterbtn5.addEventListener("click", () => {
  res5(countdata5);
});
counterbtn6.addEventListener("click", () => {
  res6(countdata6);
});
counterbtn7.addEventListener("click", () => {
  res7(countdata7);
});
counterbtn8.addEventListener("click", () => {
  res8(countdata8);
});