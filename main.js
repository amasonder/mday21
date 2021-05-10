const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    if (gif1.innerHTML === "") {
        gif1.innerHTML = "<img src='img/babypush.gif'>";
    } else {
        gif1.innerHTML = ""
    }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    if (gif2.innerHTML === "") {
        gif2.innerHTML = "<img src='img/ace.gif'>";
    } else {
        gif2.innerHTML = ""
    }
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
    if (gif3.innerHTML === "") {
        gif3.innerHTML = "<img src='img/expel.gif'>";
    } else {
        gif3.innerHTML = ""
    }
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function () {
    if (gif4.innerHTML === "") {
        gif4.innerHTML = "<img src='img/spin.gif'>";
    } else {
        gif4.innerHTML = ""
    }
});
