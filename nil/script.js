// document.querySelector("#main_div").addEventListener('click', function f() {
//     this.classList.add("fadeOut");
//     document.querySelector("#sec_div").classList.add("fadeIn");
// });
$("#main_div").fadeIn(2000);
$("#main_div").click(function () {
    $("#main_div").fadeOut(1500);
    $("#sec_div").fadeIn(2000);
});