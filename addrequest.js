const addr = document.querySelector(".buttuns");
const stran = document.querySelector("h2");
var check = 0;
addr.addEventListener("click", function () {
  if (check == 0) {
    addr.innerHTML = `<button> Remove </button>`;
    // alert("Request send sucessfully");
    stran.innerHTML = "Friends";
    stran.style.color = "red";
    check = 1;
  } else {
    addr.innerHTML = `<button> Add Request</button>`;
    stran.innerHTML = "Stranger";
    stran.style.color = "Green";
    check = 0;
  }
});
