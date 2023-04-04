(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

    screen.value = 0;

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e){
            if(!e.target.matches(".btn-equal")) {
let value = e.target.dataset.num;
if (screen.value === '0') {
screen.value = value;
 } else {
screen.value += value;
}
}
})
});
    equal.addEventListener("click", function(e) {
        if(screen.value === "") {
            screen.value = "please enter";
            
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener("click",function (e) {
        screen.value = "0";

    })
})();