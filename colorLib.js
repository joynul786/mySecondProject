// inputFunction
let input = document.getElementById("input");
let times = document.getElementById("times");
input.addEventListener("click", function () {
  input.classList.add("inputShow");
  // input.value =""
  times.style.display = "block"

});
times.addEventListener("click",function(){
  input.classList.remove("inputShow");
  times.style.display = "none"
  input.value=""
})

// barFunction
let bar = document.getElementById("bar");
let navRight = document.getElementById("nav_right");
bar.addEventListener("click", myfunction);
function myfunction() {
  var collapsd = navRight.classList.contains("show");
  if (collapsd) {
    navRight.classList.remove("show");
  } else {
    navRight.classList.add("show");
  }
}

// scroll up function
let nav_container = document.getElementById("nav_container");
// window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(!document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20){
            nav_container.style.paddingTop = 0
            nav_container.style.paddingBottom = 0
            // nav_container.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)"
            // nav_container.style.boxShadow = "10px 20px 30px blue"
        }
        else{
            nav_container.style.paddingTop = "30px"
            nav_container.style.paddingBottom = "30px"
        }
}
// widow scroll
window.onscroll = function () {
  TopScrollFunction();
  scrollFunction()
};

let topp = document.getElementById("topp");
topp.style.fontSize = "30px"
function TopScrollFunction() {
  if (
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
  ) {
    topp.style.display = "block";
  } else {
    topp.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
