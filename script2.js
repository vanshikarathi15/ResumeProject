var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + "%";
    }
}
initialiseBars();
function fillbars() {
    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute("data-width");
        let currentWidth = 0;
        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";

        }, 3);
    }
}

function checkScroll() {
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillbars()
    }
    else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }

}