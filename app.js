const prevIcon = document.getElementById("prev");
const nextIcon = document.getElementById("next");
const divMan = document.querySelector(".man");
const divWoman = document.querySelector(".woman");
const manImg = document.getElementById("man");
const womanImg = document.getElementById("woman");
console.log(divMan);
nextIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (divWoman.classList.contains("show")) {
    divWoman.classList.remove("show");
    womanImg.style.display = "none";
    divMan.classList.add("show");
    manImg.style.display = "block";
  } else {
    divWoman.classList.add("show");
    womanImg.style.display = "block";
    divMan.classList.remove("show");
    manImg.style.display = "none";
  }
});
prevIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (divWoman.classList.contains("show")) {
    divWoman.classList.remove("show");
    womanImg.style.display = "none";
    divMan.classList.add("show");
    manImg.style.display = "block";
  } else {
    divWoman.classList.add("show");
    womanImg.style.display = "block";
    divMan.classList.remove("show");
    manImg.style.display = "none";
  }
});
