let sliSec = document.querySelectorAll(".sli-js1");
let sliSec2 = document.querySelectorAll(".sli-js2");
let sliSec3 = document.querySelectorAll(".sli-js3");
let sliSec4 = document.querySelectorAll(".sli-js4");
let prev1 = document.querySelector(".prev1");
let next1 = document.querySelector(".next1");
let slider_count1 = 0

for (i = 0; i < sliSec.length; i++) {
    sliSec[i].style.left = `${i * 250}px`;
}
for (i = 0; i < sliSec2.length; i++) {
    sliSec2[i].style.left = `${i * 250}px`;
}
for (i = 0; i < sliSec3.length; i++) {
    sliSec3[i].style.left = `${i * 220}px`;
}

for (i = 0; i < sliSec4.length; i++) {
    sliSec4[i].style.left = `${i * 210}px`;
}

function prevSec() {
    if (slider_count1 > 0) {
        slider_count1--
        for (i = 0; i < sliSec.length; i++) {
            sliSec[i].style.transform = `translateX(-${slider_count1 * 100}%)`
        }
    }
}

prev1.addEventListener("click", prevSec);

function nextSec() {
    if (slider_count1 < sliSec.length - 5) {
        slider_count1++
        for (i = 0; i < sliSec.length; i++) {
            sliSec[i].style.transform = `translateX(-${slider_count1 * 100}%)`
        }

    }
}
next1.addEventListener("click", nextSec);