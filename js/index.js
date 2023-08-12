const prent1 = document.getElementById("prent1");
const prent2 = document.getElementById("prent2");
const prent3 = document.getElementById("prent3");

prent3.addEventListener("click", function() {
    if (prent1.checked == true) {
        print1();
    } else if (prent2.checked == true) {
        print2();
    } else {
        window.prompt("لطفا یک دکمه را انتخاب کنید!");
    }
});
function print1() {
    for (let i = 0; i <= 10; i++) {
        document.getElementById("pr4").innerHTML += i;
    }
}

print2();

function print2() {
    for (let i = 11; i <= 20; i++) {
        document.getElementById("pr5").innerHTML += i;
    }
}

print2();

