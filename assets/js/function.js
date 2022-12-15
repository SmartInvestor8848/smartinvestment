function display() {
    var stock = document.getElementById('stock').value;
    if (stock == "f") {
        document.getElementById('fair').style.display = "block";
        document.getElementById('buy').style.display = "none";
        document.getElementById('sell').style.display = "none";
        document.getElementById('bonus').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('wacc').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
    if (stock == "b") {
        document.getElementById('buy').style.display = "block";
        document.getElementById('fair').style.display = "none";
        document.getElementById('sell').style.display = "none";
        document.getElementById('bonus').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('wacc').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
    if (stock == "s") {
        document.getElementById('sell').style.display = "block";
        document.getElementById('buy').style.display = "none";
        document.getElementById('fair').style.display = "none";
        document.getElementById('bonus').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('wacc').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
    if (stock == "bo") {
        document.getElementById('bonus').style.display = "block";
        document.getElementById('buy').style.display = "none";
        document.getElementById('sell').style.display = "none";
        document.getElementById('fair').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('wacc').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
    if (stock == "ri") {
        document.getElementById('right').style.display = "block";
        document.getElementById('buy').style.display = "none";
        document.getElementById('sell').style.display = "none";
        document.getElementById('bonus').style.display = "none";
        document.getElementById('fair').style.display = "none";
        document.getElementById('wacc').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
    if (stock == "wa") {
        document.getElementById('wacc').style.display = "block";
        document.getElementById('buy').style.display = "none";
        document.getElementById('sell').style.display = "none";
        document.getElementById('bonus').style.display = "none";
        document.getElementById('right').style.display = "none";
        document.getElementById('fair').style.display = "none";
        document.getElementById('calculate').style.display = "none";
    }
}

function calcBonus() {
    let box1 = document.getElementById("box1").value;
    let box2 = document.getElementById("box2").value;
    var sum = (Number(box1) / (1 + (Number(box2) / 100)));
    var sum = sum.toFixed(0);
    document.getElementById("b").value = sum;
}

function calcRight() {
    let box3 = document.getElementById("box3").value;
    let box4 = document.getElementById("box4").value;
    let box5 = document.getElementById("box5").value;
    var sum = (Number(box3) + (Number(box5) * (Number(box4) / 100))) / (1 + (Number(box4) / 100));
    var sum = sum.toFixed(0);
    document.getElementById("r").value = sum;
}

function calcPay() {
    let box6 = document.getElementById("box6").value;
    let box7 = document.getElementById("box7").value;
    var multiply = (Number(box6) * Number(box7));
    if (multiply > 10000000) {
        var sum = multiply * (1 + 0.0027 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 2000000 && multiply < 10000000) {
        var sum = multiply * (1 + 0.0030 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 500000 && multiply < 2000000) {
        var sum = multiply * (1 + 0.0034 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else if (multiply >= 50000 && multiply < 500000) {
        var sum = multiply * (1 + 0.0037 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    } else {
        var sum = multiply * (1 + 0.0040 + 0.00015);
        var total = sum + 25;
        var total = total.toFixed(2);
        document.getElementById("c").value = total;
    }
}

function calcSell() {
    let box8 = document.getElementById("box8").value; //quantity
    let box9 = document.getElementById("box9").value; // Purchase price
    let box10 = document.getElementById("box10").value; // Selling price
    let boxtax = document.getElementById("boxtax").value; // select capital gain tax
    var income = Number(box8) * Number(box10);
    var invest = Number(box8) * Number(box9);
    if (income > 10000000) {
        var nettotal = income * (1 - 0.0027 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 2000000 && income < 10000000) {
        var nettotal = income * (1 - 0.0030 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 500000 && income < 2000000) {
        var nettotal = income * (1 - 0.0034 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income >= 50000 && income < 500000) {
        var nettotal = income * (1 - 0.0037 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else if (income < 50000) {
        var nettotal = income * (1 - 0.0040 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    } else {
        var nettotal = income * (1 - 0.0040 - 0.00015) - 25;
        var cgt = (nettotal - invest) * boxtax;
        var total = nettotal - cgt;
        var total = total.toFixed(2);
        document.getElementById("d").value = total;
    }
}

function invest() {
    let box11 = document.getElementById("box11").value;
    let box12 = document.getElementById("box12").value;
    let box13 = document.getElementById("box13").value;
    var eps = Number(box11) / Number(box12);
    var eps = eps.toFixed(2);
    document.getElementById("eps").value = eps;
    var sum = 22.5 * Number(box13) * eps;
    var sum = Math.sqrt(sum);
    var sum = sum.toFixed(0);
    document.getElementById("v").value = sum;
}

function wacc() {
    let box14 = document.getElementById("box14").value;
    let box15 = document.getElementById("box15").value;
    let box16 = document.getElementById("box16").value;
    var bon = Number(box16) / 100;
    var ex = (bon * Number(box15) * 100);
    var total = ((Number(box14) * Number(box15)) + ex) / Number(box15);
    var wacc = total / (1 + bon);
    var wacc = wacc.toFixed(2);
    document.getElementById("wa").value = wacc;
}

// <---------------analog clock------------------>
setInterval(() => {
    let hr = document.querySelector('#hr')
    let mn = document.querySelector('#mn')
    let sc = document.querySelector('#sc')

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

// <---------------Digital Clock------------------>
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    // convert 34 hr to 12 hr
    if (h > 12) {
        h = h - 12;
    }

    // add zero before single digit no
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
})


function readMore(quote) {
    let dots = document.querySelector(`.team__quote[data-quote="${quote}"] .dots`);
    let moreText = document.querySelector(`.team__quote[data-quote="${quote}"] .more`); 
    let btnText = document.querySelector(`.team__quote[data-quote="${quote}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}