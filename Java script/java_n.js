function mySum() {
    var x = parseInt(document.getElementById("x").value) ;
    var y = parseInt(document.getElementById("y").value) ;
    var sum = x + y ;
    var ssum = x + "+" + y + "=" + sum ;
    document.getElementById("rs01").innerHTML=ssum ;
}

function mySub() {
    var x = parseInt(document.getElementById("x").value) ;
    var y = parseInt(document.getElementById("y").value) ;
    var sub = x - y ;
    var ssub = x + "-" + y + "=" + sub ;
    document.getElementById("rs01").innerHTML=ssub ;
}

function myMulti() {
    var x = parseFloat(document.getElementById("x").value) ;
    var y = parseFloat(document.getElementById("y").value) ;
    var multri = x * y ;
    var mmultri = x + "x" + y + "=" + multri ;
    document.getElementById("rs01").innerHTML=mmultri ;
}

function myDivise() {
    var x = parseFloat(document.getElementById("x").value) ;
    var y = parseFloat(document.getElementById("y").value) ;
    var divise = x / y ;
    var ddivise = x + "/" + y + "=" + divise ;
    document.getElementById("rs01").innerHTML=ddivise ;
}