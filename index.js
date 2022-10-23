const words = [
  "Freelancing",
  "Web Development",
  "Front-end Development",
  "Software Development",
];
let i = 0;
let timer;
function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 200);
  };
  loopDeleting();
}
typingEffect();

// hamburger
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});
$(document).ready(function () {
  $(".toast").toast("show");
});

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

if (screen.width >= 992) {
  $("#certificate").show();
} else {
  $("#certificate").hide();
}
