function getName() {
    var fname = document.getElementById("fname").value ;
    var lname = document.getElementById("lname").value ;
    var fullname = fname + " " + lname ;
    document.getElementById("rs1").innerHTML=fname ;
    document.getElementById("rs2").innerHTML=lname ;
    document.getElementById("rs3").innerHTML=fullname ;
}