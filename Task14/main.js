clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}


function deleteItem() {
    localStorage.removeItem("number");
  }
  function displayItem() {
    var x = localStorage.getItem("number");
    document.getElementById("demo").innerHTML = x;
  }